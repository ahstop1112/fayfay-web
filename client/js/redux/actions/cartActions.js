import {
    CART_CANCEL_UPDATE,
    CART_FETCH_PACKAGE_AVAILABILITIES,
    CART_LOAD_TICKET_TYPES,
    CART_SELECT_PACKAGE_BOOKING_DATE,
    CART_SELECTED_ITEM,
    CART_UPDATE_PACKAGE_TICKET_PURCHASE,
    FETCH_CART_ITEMS,
    FETCH_PREVIEW_CART_ITEMS,
    SHOPPING_CART_COUNT
} from '../reducers/cartReducers';
import {
    FETCH_COMPLETE,
    FETCH_PENDING,
    RESET_STATUS,
    SERVER_ERROR,
    SUBMIT_COMPLETE,
    SUBMIT_PENDING
} from '../reducers/ajaxStatusReducers';
import axios from 'axios/index';

import { getLangUrl } from '../../utils/helpers';

export function fetchAvailableDates(activityId, packageId) {
    return async dispatch => {
        const url = `/public/activities/${activityId}/packages/${packageId}/availabilities`;

        try {
            dispatch({ type: RESET_STATUS });
            const response = await axios.get(url);
            const availableDates = response.data;

            const dateToTimeList = {};

            availableDates.forEach(obj => {
                // if the date key doesn't exist, init with an empty array
                if (!dateToTimeList[obj.date]) {
                    dateToTimeList[obj.date] = [];
                }
                dateToTimeList[obj.date].push(obj);
            });

            dispatch({
                type: CART_FETCH_PACKAGE_AVAILABILITIES,
                availableDates: dateToTimeList
            });
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function selectPackageBookingDate(packageId, dateString) {
    return dispatch => {
        dispatch({
            type: CART_SELECT_PACKAGE_BOOKING_DATE,
            packageId: packageId,
            bookingDate: dateString
        });
    };
}

export function loadTicketTypes(activityId, packageId, availabilityId) {
    return async dispatch => {
        const url = `/public/activities/${activityId}/packages/${packageId}/availabilities/${availabilityId}/prices`;

        try {
            const response = await axios.get(url);
            const ticketTypeData = response.data;

            dispatch({
                type: CART_LOAD_TICKET_TYPES,
                packageId: packageId,
                packageAvailabilityId: availabilityId,
                ticketTypeData: ticketTypeData
            });
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function updatePackageTicketPurchase(packageId,
                                            bookingDate,
                                            bookingTime,
                                            ticketTypeId,
                                            ticketTypeName,
                                            quantity,
                                            unitPrice) {
    return dispatch => {
        dispatch({
            type: CART_UPDATE_PACKAGE_TICKET_PURCHASE,
            ticketPurchaseInfo: {
                packageId,
                bookingDate,
                bookingTime,
                ticketTypeId,
                ticketTypeName,
                quantity,
                unitPrice
            }
        });
    };
}

export function updateCart(cartId, values) {
    return async dispatch => {
        dispatch({ type: SUBMIT_PENDING });
        try {
            await axios.put(`/api/carts/${cartId}`, values);

            const response = await axios.get(`/api/carts`);
            dispatch({
                type: FETCH_CART_ITEMS,
                cartItems: response.data
            });
            dispatch({ type: SUBMIT_COMPLETE });
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function deleteCart(ids) {
    return async (dispatch, getState) => {
        dispatch({
            type: FETCH_PENDING
        });
        try {
            const state = getState();

            const url = ids.reduce((result, id, index) => {
                return result + (index > 0 ? '&' : '') + `ids=${id}`;
            }, '/api/carts?');

            await axios.delete(url);

            const selectedIds = state.cart.selectedCartIds.filter(id => {
                return ids.indexOf(id) === -1;
            });

            dispatch({
                type: CART_SELECTED_ITEM,
                selectedCartIds: selectedIds
            });

            const newCartItems = state.cart.cartItems.filter(item => {
                return ids.indexOf(item.id) === -1;
            });


            if (!newCartItems.length) {
                window.location.reload(true);
            }

            dispatch({
                type: FETCH_CART_ITEMS,
                cartItems: newCartItems
            });

            dispatch({
                type: FETCH_COMPLETE
            });

        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function cancelUpdate() {
    return dispatch => {
        dispatch({
            type: CART_CANCEL_UPDATE
        });
    };
}

export function updateSelectedCarts(selectedIds) {
    return dispatch => {
        dispatch({
            type: CART_SELECTED_ITEM,
            selectedCartIds: selectedIds
        });
    };
}

export function cartCheckout(selectedIds, locale) {
    return async dispatch => {
        dispatch({
            type: SUBMIT_PENDING
        });
        try {
            const url = selectedIds.reduce((arr, id, index) => {
                return arr + (index > 0 ? '&' : '') + `ids=${id}`;
            }, '/api/carts/pay?');

            await axios.put(url);
            dispatch({
                type: SUBMIT_COMPLETE
            });

            const langUrl = getLangUrl(locale);

            window.location = `${langUrl}/checkout`;
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function getPreviewCartItems() {
    return async dispatch => {
        dispatch({
            type: FETCH_PENDING
        });
        try {
            const countCartResponse = await axios.get('/api/carts/count');
            const cartItemsResponse = await axios.get('/api/carts');
            const previewCartItems = cartItemsResponse.data.filter(item => item.valid);

            dispatch({
                type: SHOPPING_CART_COUNT,
                cartCount: countCartResponse.data
            });

            dispatch({
                type: FETCH_PREVIEW_CART_ITEMS,
                previewCartItems: previewCartItems
            });

            dispatch({
                type: FETCH_COMPLETE
            });
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function deletePreviewCart(id) {
    return async (dispatch, getState) => {
        dispatch({
            type: SUBMIT_PENDING
        });
        try {
            const state = getState();
            await axios.delete(`/api/carts?ids=${id}`);

            if (window.location.href.indexOf('/checkout') >= 0) {
                window.location.reload();
            }

            dispatch({
                type: SHOPPING_CART_COUNT,
                cartCount: state.cart.cartCount - 1
            });

            const newCartItems = state.cart.previewCartItems.filter(item => item.id !== id);
            dispatch({
                type: FETCH_PREVIEW_CART_ITEMS,
                previewCartItems: newCartItems
            });

            dispatch({
                type: SUBMIT_COMPLETE
            });
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}
