export const FETCH_USER_COUPONS = 'fayfay/payment/fetchCoupons';
export const SELECT_COUPON = 'fayfay/payment/selectCoupon';
export const PAYMENT_FETCH_USER_CART = 'fayfay/payment/fetchUserCart'

const initialState = {
    coupons: [],
    cartItems: [],
    payment: {
        totalAmount: 0,
        totalPayAmount: 0,
        payTotalAmount: 0
    },
    selectedCouponId: 0,
    selectedCoupon: {}
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case FETCH_USER_COUPONS:
            return {
                ...state,
                coupons: action.coupons
            };
        case PAYMENT_FETCH_USER_CART:
            return {
                ...state,
                cartItems: action.cartItems,
                payment: action.payment
            };
        case SELECT_COUPON:
            return {
                ...state,
                selectedCoupon: action.coupon,
                selectedCouponId: action.couponId
            };
        default:
            return state;
    }
}
