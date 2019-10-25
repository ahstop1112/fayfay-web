import {
    FETCH_COMPLETE,
    FETCH_PENDING,
    SERVER_ERROR,
    SUBMIT_COMPLETE,
    SUBMIT_PENDING
} from '../reducers/ajaxStatusReducers';
import {
    ADD_TO_WISH_LIST,
    FETCH_PACKAGE_AVAILABILITIES,
    FETCH_REVIEWS,
    LOAD_TICKET_TYPES,
    REMOVE_WISH_LIST,
    SELECT_PACKAGE,
    SELECT_PACKAGE_BOOKING_DATE,
    SELECT_PACKAGE_BOOKING_TIME,
    TOGGLE_PACKAGE_SHOW_DETAILS,
    UPDATE_PACKAGE_TICKET_PURCHASE
} from '../reducers/activityReducers';

import axios from 'axios/index';
import Constants from 'fayfayConstants';
import { getLangUrl } from "../../utils/helpers";
import { SHOPPING_CART_COUNT } from "../reducers/cartReducers";

export function selectPackage(selectedPackage, activityId) {
    return async dispatch => {
        dispatch({
            type: SELECT_PACKAGE,
            activityId: activityId,
            activePackage: selectedPackage
        });

        if (selectedPackage && activityId) {
            const url = `/public/activities/${activityId}/packages/${selectedPackage.id}/availabilities`;

            dispatch({
                type: FETCH_PENDING
            });

            try {
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
                    type: FETCH_PACKAGE_AVAILABILITIES,
                    availableDates: dateToTimeList
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
            type: UPDATE_PACKAGE_TICKET_PURCHASE,
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

export function selectPackageBookingDate(packageId, dateString) {
    return async (dispatch, getState) => {
        dispatch({
            type: SELECT_PACKAGE_BOOKING_DATE,
            packageId: packageId,
            bookingDate: dateString
        });

        const state = getState();

        const timeList = state.activity.availableDates[dateString];
        if (timeList.length === 1 && timeList[0].time === Constants.ALL_DAY_BOOKING_TIME) {
            try {
                const url = `/public/activities/${state.activity.activityId}/packages/${packageId}/availabilities/${timeList[0].id}/prices`;
                const response = await axios.get(url);
                const ticketTypeData = response.data;

                dispatch({
                    type: SELECT_PACKAGE_BOOKING_TIME,
                    packageId: packageId,
                    packageAvailabilityId: timeList[0].id,
                    bookingTime: Constants.ALL_DAY_BOOKING_TIME,
                    quota: timeList[0].quota
                });

                dispatch({
                    type: LOAD_TICKET_TYPES,
                    packageId: packageId,
                    ticketTypeData: ticketTypeData
                });
            } catch (error) {
                dispatch({
                    type: SERVER_ERROR,
                    serverStatus: error.response.status,
                    serverMessage: error.response.data.message
                });
            }
        }
    };
}

export function selectPackageBookingTime(activityId, packageId, packageAvailabilityId, timeString, quota) {
    return async (dispatch, getState) => {
        const url = `/public/activities/${activityId}/packages/${packageId}/availabilities/${packageAvailabilityId}/prices`;

        try {
            const response = await axios.get(url);
            const ticketTypeData = response.data;

            dispatch({
                type: SELECT_PACKAGE_BOOKING_TIME,
                packageId: packageId,
                packageAvailabilityId: packageAvailabilityId,
                bookingTime: timeString,
                quota
            });

            dispatch({
                type: LOAD_TICKET_TYPES,
                packageId: packageId,
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

export function addToCart(values, bookNow = false) {
    return async dispatch => {
        dispatch({
            type: SUBMIT_PENDING
        });
        try {
            const langUrl = getLangUrl(values.locale);

            const response = await axios.post('/api/carts', values);
            dispatch({
                type: SUBMIT_COMPLETE
            });

            if (bookNow) {
                window.location = `${langUrl}/checkout?cartId=${response.data}`;

                //facebook pixel - Check Out
                fbq('track', 'InitiateCheckout');
            } else {
                //window.location = `${langUrl}/cart`;

                //facebook pixel - Add To Cart
                fbq('track', 'AddToCart');
            }
        } catch (error) {
            if (error.response.status === 401) {
                if (window.sessionStorage) {
                    window.sessionStorage.setItem('CART', JSON.stringify({
                        bookNow: bookNow,
                        values: values
                    }))
                }
            }

            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function addToWishList(activityId) {
    return async dispatch => {
        try {
            const response = await axios.post('/api/wishlists', { activityId: activityId });
            dispatch({
                type: ADD_TO_WISH_LIST,
                wishListId: response.data
            });
        } catch (error) {
            if (error.response.status === 401) {
                if (window.sessionStorage) {
                    window.sessionStorage.setItem('WISHLIST', activityId)
                }
            }

            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function removeWishList(activityId) {
    return async dispatch => {
        try {
            await axios.delete(`/api/wishlists?activityId=${activityId}`);
            dispatch({
                type: REMOVE_WISH_LIST,
                wishListId: null
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

export function fetchReviews(activityId, pageIndex, pageSize = 10) {
    return async dispatch => {
        try {
            const response = await axios.get(`/public/activities/${activityId}/reviews?page.index=${pageIndex}&page.size=${pageSize}`);
            dispatch({
                type: FETCH_REVIEWS,
                reviews: response.data.data || [],
                totalCount: response.data.totalCount,
                totalPage: response.data.totalPage,
                pageIndex: response.data.page.index,
                pageSize: response.data.page.size,
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
