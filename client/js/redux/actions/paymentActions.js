import {
    FETCH_COMPLETE,
    FETCH_PENDING,
    RESET_STATUS,
    SERVER_ERROR,
    SUBMIT_COMPLETE,
    SUBMIT_PENDING
} from '../reducers/ajaxStatusReducers';
import { FETCH_USER_COUPONS, PAYMENT_FETCH_USER_CART, SELECT_COUPON } from '../reducers/paymentReducers';
import axios from 'axios/index';
import { getLangUrl } from "../../utils/helpers";

export function cartCheckout(values, payNowCartId) {
    return async dispatch => {
        dispatch({
            type: RESET_STATUS
        });

        dispatch({
            type: SUBMIT_PENDING
        });
        try {
            //facebook pixel - Add Payment Info
            fbq('track', 'AddPaymentInfo');

            const url = payNowCartId ? `/api/pay?cartId=${payNowCartId}` : '/api/pay';
            const postResponse = await axios.post(url, values);

            dispatch({
                type: SUBMIT_COMPLETE
            });

            const orderId = postResponse.data;

            window.location.replace(`/checkout/thank-you/${orderId}`);

        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function onePayCheckout(values, payNowCartId, totalAmount, currency, domestic) {
    return async dispatch => {
        dispatch({
            type: RESET_STATUS
        });

        dispatch({
            type: SUBMIT_PENDING
        });
        try {
            const url = payNowCartId ? `/api/payment/onepay?cartId=${payNowCartId}&domestic=${domestic}` : `/api/payment/onepay?domestic=${domestic}`;
            const postResponse = await axios.post(url, values);

            dispatch({
                type: SUBMIT_COMPLETE
            });

            const onePayPaymentUrl = postResponse.data;

            //facebook pixel - Purchase
            fbq('track', 'Purchase', { value: totalAmount, currency: currency });

            window.location.href = onePayPaymentUrl;

        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function paypalCheckOut(values, queryObject, totalAmount, currency) {
    return async dispatch => {
        dispatch({
            type: RESET_STATUS
        });

        dispatch({
            type: SUBMIT_PENDING
        });
        try {
            const queryString = jQuery.param(queryObject);
            const url = `/api/payment/paypal/execute?${queryString}`;
            const postResponse = await axios.post(url, values);

            dispatch({
                type: SUBMIT_COMPLETE
            });

            const orderId = postResponse.data;

            const langUrl = getLangUrl(values.locale);

            //facebook pixel - Purchase
            fbq('track', 'Purchase', { value: totalAmount, currency: currency });

            window.location.replace(`${langUrl}/checkout/thank-you/${orderId}`);

        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function redeemCoupon(promoCode, cartId) {
    return async dispatch => {
        const url = `/api/coupons/${promoCode}`;

        dispatch({
            type: SUBMIT_PENDING
        });

        try {
            await axios.post(url);

            dispatch(fetchCoupons(cartId));

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

export function fetchCoupons(payNowCartId) {
    return async dispatch => {

        try {
            const url = payNowCartId ? `/api/coupons/carts?cartId=${payNowCartId}` : '/api/coupons/carts';
            const response = await axios.get(url);

            dispatch({
                type: FETCH_USER_COUPONS,
                coupons: response.data.sort((a, b) => !a.valid)
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

export function fetchCartInfo(payNowCartId, gateway, couponId) {
    return async dispatch => {
        dispatch({
            type: FETCH_PENDING
        });

        try {
            let params = `gateway=${gateway}`;
            if(couponId) {
                params += `&couponId=${couponId}`;
            }
            const url = payNowCartId ? `/api/carts/${payNowCartId}?${params}`
                : `/api/carts/pay?${params}`;
            const checkout = await axios.get(url);

            dispatch({
                type: PAYMENT_FETCH_USER_CART,
                cartItems: checkout.data.cartItems ? checkout.data.cartItems.filter(item => !item.expired && item.valid) : [],
                payment: checkout.data.payment
            });

            if(couponId) {
                dispatch({
                    type: SELECT_COUPON,
                    couponId,
                    coupon: checkout.data.payment
                });
            }

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

export function selectCoupon(couponId, cartId, gateway) {
    return async dispatch => {
        try {
            if (couponId) {
                const url = cartId ? `/api/coupons/${couponId}/carts?cartId=${cartId}&gateway=${gateway}`
                    : `/api/coupons/${couponId}/carts?gateway=${gateway}`;
                const response = await axios.get(url);
                dispatch({
                    type: SELECT_COUPON,
                    couponId,
                    coupon: response.data
                });
            } else {
                dispatch({
                    type: SELECT_COUPON,
                    couponId,
                    coupon: {}
                });
            }
        } catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function resetAjaxStatus() {
    return dispatch => {
        dispatch({
            type: RESET_STATUS
        });
    };
}
