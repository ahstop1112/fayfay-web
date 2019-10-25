export const FETCH_BOOKINGS = 'fayfay/account/fetchBookings';
export const FETCH_WISHLIST = 'fayfay/account/fetchWishlist';
export const FETCH_REVIEWS = 'fayfay/account/fetchReviews';
export const UPDATE_REVIEWS = 'fayfay/account/updateReviews';
export const REMOVE_FROM_WISHLIST = 'fayfay/account/removeFromWishlist';
export const FIELDS_TO_VERIFY = 'fayfay/account/updateFieldsToVerify';
export const EMAIL_VERIFY = 'fayfay/account/passEmailVerify';
export const PHONE_VERIFY = 'fayfay/account/passPhoneVerify';
export const FETCH_COUPONS = 'fayfay/account/fetchCoupons';

const initialState = {
    needToVerifyEmail: false,
    details: {},
    pageName: ''
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case FETCH_COUPONS:
            return {
                ...state,
                pageName: 'coupons',
                details: action.details
            };
        case FETCH_REVIEWS:
            return {
                ...state,
                pageName: 'reviews',
                details: action.details
            };
        case FETCH_WISHLIST:
            return {
                ...state,
                pageName: 'wish-list',
                details: action.details
            };
        case FETCH_BOOKINGS:
            return {
                ...state,
                pageName: 'bookings',
                details: action.details
            };
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                pageName: 'wish-list',
                details: {...state.details, data: state.details.data.filter((it)=>{ return it.activityId != action.activityId})}
            };
        case UPDATE_REVIEWS:
            return {
                ...state,
                pageName: 'reviews',
                details: {...state.details, data: state.details.data.map((it)=>{
                    if (it.orderId == action.orderId && it.activityId == action.activityId){
                      return {...it, rating: action.rating, content: action.content}
                    }
                    return it;
                  })
                }
            };
        case FIELDS_TO_VERIFY:
            return {
                ...state,
                pageName: 'account',
                needToVerifyEmail: action.needToVerifyEmail,
            };
        case EMAIL_VERIFY:
            return {
                ...state,
                pageName: 'account',
                details: {...state.details, verifiedEmail: action.passVerified}
            };
        case PHONE_VERIFY:
            return {
                ...state,
                pageName: 'account',
                details: {...state.details, verifiedPhoneNumber: action.passVerified}
            };
        default:
            return state;
    }
}
