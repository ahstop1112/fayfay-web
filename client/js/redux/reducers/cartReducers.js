export const FETCH_CART_ITEMS = 'fayfay/cart/fetchCartItems';
export const FETCH_PREVIEW_CART_ITEMS = 'fayfay/cart/fetchPreviewCartItems';
export const CART_FETCH_PACKAGE_AVAILABILITIES = 'fayfay/cart/fetchPackageAvailabilities';
export const CART_SELECT_PACKAGE_BOOKING_DATE = 'fayfay/cart/selectPackageBookingDate';
export const CART_LOAD_TICKET_TYPES = 'fayfay/cart/loadTicketTypes';
export const CART_UPDATE_PACKAGE_TICKET_PURCHASE = 'fayfay/cart/updatePackageTicketPurchase';
export const CART_CANCEL_UPDATE = 'fayfay/cart/cancelUpdatePackageTicketPurchase';
export const CART_SELECTED_ITEM = 'fayfay/cart/selectCartItem';
export const SHOPPING_CART_COUNT = 'fayfay/cart/cartCount';

const initialState = {
    cartItems: [],
    previewCartItems: [],
    selectedCartIds: [],
    availableDates: {},
    packageOptionMap: {},
    cartCount: 0
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SHOPPING_CART_COUNT:
            return {
                ...state,
                cartCount: action.cartCount
            };
        case FETCH_PREVIEW_CART_ITEMS:
            return {
                ...state,
                previewCartItems: action.previewCartItems
            };
        case FETCH_CART_ITEMS:
            return {
                ...state,
                cartItems: action.cartItems
            };
        case CART_SELECTED_ITEM:
            return {
                ...state,
                selectedCartIds: action.selectedCartIds
            };
        case CART_FETCH_PACKAGE_AVAILABILITIES: {
            return {
                ...state,
                updateCartSuccess: false,
                availableDates: action.availableDates,
                packageOptionMap: {
                    ...state.packageOptionMap,
                    bookingDate: '',
                    packageAvailabilityId: 0, // clear the time
                    ticketsToPurchase: {}
                }
            };
        }
        case CART_SELECT_PACKAGE_BOOKING_DATE: {
            const { bookingDate } = action;
            return {
                ...state,
                packageOptionMap: {
                    bookingDate: bookingDate,
                    packageAvailabilityId: 0, // clear the time
                    ticketTypeData: [], // clear the ticket type data
                    ticketsToPurchase: {} // clear the chosen tickets
                }
            };
        }
        case CART_LOAD_TICKET_TYPES: {
            const { packageAvailabilityId, ticketTypeData } = action;
            return {
                ...state,
                packageOptionMap: {
                    ...state.packageOptionMap,
                    packageAvailabilityId,
                    ticketTypeData: ticketTypeData,
                    ticketsToPurchase: {} // clear the chosen tickets
                }
            };
        }
        case CART_UPDATE_PACKAGE_TICKET_PURCHASE: {
            const {
                bookingDate,
                bookingTime,
                ticketTypeId,
                ticketTypeName,
                quantity,
                unitPrice
            } = action.ticketPurchaseInfo;
            return {
                ...state,
                packageOptionMap: {
                    ...state.packageOptionMap,
                    bookingDate: bookingDate,
                    bookingTime: bookingTime,
                    ticketsToPurchase: {
                        ...state.packageOptionMap.ticketsToPurchase,
                        [ticketTypeId]: {
                            ticketTypeId,
                            ticketTypeName,
                            quantity,
                            unitPrice
                        }
                    }
                }
            };
        }
        case CART_CANCEL_UPDATE: {
            return {
                ...state,
                packageOptionMap: {
                    ...state.packageOptionMap,
                    bookingDate: '',
                    packageAvailabilityId: 0, // clear the time
                    ticketsToPurchase: {}
                }
            };
        }
        default:
            return state;
    }
}
