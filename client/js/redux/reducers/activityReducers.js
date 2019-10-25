export const SELECT_PACKAGE = 'fayfay/activity/selectPackage';
export const FETCH_PACKAGE_AVAILABILITIES = 'fayfay/activity/fetchPackageAvailabilities';
export const UPDATE_PACKAGE_TICKET_PURCHASE = 'fayfay/activity/updatePackageTicketPurchase';
export const SELECT_PACKAGE_BOOKING_DATE = 'fayfay/activity/selectPackageBookingDate';
export const SELECT_PACKAGE_BOOKING_TIME = 'fayfay/activity/selectPackageBookingTime';
export const LOAD_TICKET_TYPES = 'fayfay/activity/loadTicketTypes';
export const ADD_TO_WISH_LIST = 'fayfay/activity/addToWishList';
export const REMOVE_WISH_LIST = 'fayfay/activity/removeWishList';
export const FETCH_REVIEWS = 'fayfay/activity/fetchActivityReviews'

export const initialState = {
    activityId: 0,
    packageAvailabilityId: 0,
    activePackage: {},
    availableDates: {},
    packageOptionMap: {},
    wishListId: null,
    reviews: [],
    totalCount: 0,
    totalPage: 0,
    pageIndex: 1,
    pageSize: 10
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SELECT_PACKAGE: {
            const { activityId, activePackage } = action;

            if (activityId && activePackage) {
                return {
                    ...state,
                    activityId: activityId,
                    activePackage: activePackage,
                    packageOptionMap: {
                        ...state.packageOptionMap,
                        [activePackage.id]: {
                            ...state.packageOptionMap[activePackage.id],
                            packageId: activePackage.id,
                            showDetails: true
                        }
                    }
                };
            } else {
                return {
                    ...state,
                    activityId: 0,
                    activePackage: {},
                    packageOptionMap: {}
                }
            }
        }
        case FETCH_PACKAGE_AVAILABILITIES: {
            return {
                ...state,
                availableDates: action.availableDates
            };
        }
        case UPDATE_PACKAGE_TICKET_PURCHASE: {
            const {
                packageId,
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
                    [packageId]: {
                        ...state.packageOptionMap[packageId],
                        bookingDate: bookingDate,
                        bookingTime: bookingTime,
                        ticketsToPurchase: {
                            ...state.packageOptionMap[packageId].ticketsToPurchase,
                            [ticketTypeId]: {
                                ticketTypeId,
                                ticketTypeName,
                                quantity,
                                unitPrice
                            }
                        }
                    }
                }
            };
        }
        case SELECT_PACKAGE_BOOKING_DATE: {
            const { packageId, bookingDate } = action;
            return {
                ...state,
                packageOptionMap: {
                    ...state.packageOptionMap,
                    [packageId]: {
                        ...state.packageOptionMap[packageId],
                        bookingDate: bookingDate,
                        bookingTime: '', // clear the time
                        ticketTypeData: [], // clear the ticket type data
                        ticketsToPurchase: {} // clear the chosen tickets
                    }
                }
            };
        }
        case SELECT_PACKAGE_BOOKING_TIME: {
            const { packageId, bookingTime, packageAvailabilityId, quota } = action;
            return {
                ...state,
                packageAvailabilityId: packageAvailabilityId,
                packageOptionMap: {
                    ...state.packageOptionMap,
                    [packageId]: {
                        ...state.packageOptionMap[packageId],
                        bookingTime: bookingTime,
                        quota: quota,
                        ticketTypeData: [], // clear the ticket type data
                        ticketsToPurchase: {} // clear the chosen tickets
                    }
                }
            };
        }
        case LOAD_TICKET_TYPES: {
            const { packageId, ticketTypeData } = action;
            return {
                ...state,
                packageOptionMap: {
                    ...state.packageOptionMap,
                    [packageId]: {
                        ...state.packageOptionMap[packageId],
                        ticketTypeData: ticketTypeData,
                        ticketsToPurchase: {} // clear the chosen tickets
                    }
                }
            };
        }
        case ADD_TO_WISH_LIST: {
            return {
                ...state,
                wishListId: action.wishListId
            }
        }
        case REMOVE_WISH_LIST: {
            return {
                ...state,
                wishListId: null
            }
        }
        case FETCH_REVIEWS: {
            return {
                ...state,
                reviews: action.reviews,
                totalCount: action.totalCount,
                totalPage: action.totalPage,
                pageIndex: action.pageIndex,
                pageSize: action.pageSize,
            }
        }
        default:
            return state;
    }
}
