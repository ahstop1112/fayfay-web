import { RESET_STATUS, SERVER_ERROR, SUBMIT_COMPLETE, SUBMIT_PENDING } from '../reducers/ajaxStatusReducers';
import { RESET_CAPTCHA } from '../reducers/registerReducer';

import axios from 'axios/index';
import { getFullUrl, getLangUrl, getParameterByName } from '../../utils/helpers';
import { addToCart, addToWishList } from './activityActions';

function executePendingRequests() {
    return async dispatch => {
        if (window.sessionStorage) {
            try {
                const activityId = window.sessionStorage.getItem('WISHLIST');
                if (activityId) {
                    window.sessionStorage.removeItem('WISHLIST');

                    dispatch(addToWishList(activityId));
                }
            }
            catch (e) {
                window.sessionStorage.removeItem('WISHLIST');
            }

            try {
                const cart = JSON.parse(window.sessionStorage.getItem('CART'));
                if (cart) {
                    window.sessionStorage.removeItem('CART');

                    dispatch(addToCart(cart.values, cart.bookNow));
                }
            }
            catch (e) {
                window.sessionStorage.removeItem('CART');
            }
        }

        return false;
    }
}

export function register(userInfo, captchaResponse) {

    return async dispatch => {
        const url = `/register?g-recaptcha-response=${captchaResponse}`;

        //Submit Status
        dispatch({
            type: SUBMIT_PENDING
        });

        try {
            const languageSetting = await axios.post(url, userInfo);

            dispatch({
                type: SUBMIT_COMPLETE
            });

            const isRedirectInternal = await dispatch(executePendingRequests());

            if (!isRedirectInternal) {

                //facebook pixel - Add To Cart
                fbq('track', 'CompleteRegistration');

                const redirectUrl = getParameterByName('redirectUrl');
                if (redirectUrl) {
                    window.location.replace(redirectUrl);
                }
                else {
                    const langUrl = getLangUrl(languageSetting.data);

                    if (document.referrer) {
                        const parser = document.createElement('a');
                        parser.href = document.referrer;

                        if (parser.host === window.location.host) {
                            window.location.replace(getFullUrl(parser, languageSetting.data));
                        }
                        else {
                            window.location.replace(`${langUrl}/`);
                        }
                    }
                    else {
                        window.location.replace(`${langUrl}/`);
                    }
                }
            }

        } catch (error) {
            dispatch({
                type: RESET_CAPTCHA,
                resetCaptcha: true
            });
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    };
}

export function login(userInfo) {

    return async dispatch => {
        const url = `/login`;

        //Submit Status
        dispatch({
            type: SUBMIT_PENDING
        });

        try {
            const languageSetting = await axios.post(url, userInfo);

            dispatch({
                type: SUBMIT_COMPLETE
            });

            const isRedirectInternal = await dispatch(executePendingRequests());

            if (!isRedirectInternal) {
                const redirectUrl = getParameterByName('redirectUrl');
                if (redirectUrl) {
                    window.location.replace(redirectUrl);
                }
                else {
                    const langUrl = getLangUrl(languageSetting.data);
                    if (document.referrer) {
                        const parser = document.createElement('a');
                        parser.href = document.referrer;

                        if (parser.host === window.location.host) {
                            window.location.replace(getFullUrl(parser, languageSetting.data));
                        }
                        else {
                            window.location.replace(`${langUrl}/`);
                        }
                    }
                    else {
                        window.location.replace(`${langUrl}/`);
                    }
                }
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

export function forgotPassword(bodyData) {

    return async dispatch => {
        const url = `/public/forgot-password?g-recaptcha-response=${bodyData.captchaResponse}`;

        //Submit Status
        dispatch({
            type: SUBMIT_PENDING
        });

        try {
            await axios.post(url, { email: bodyData.email });

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

export function resetPassword(resetInfo) {

    return async dispatch => {
        const url = `/public/reset-password`;

        //Submit Status
        dispatch({
            type: SUBMIT_PENDING
        });

        try {
            await axios.put(url, resetInfo);

            dispatch({
                type: SUBMIT_COMPLETE
            });

            window.location.replace('/');

        } catch (error) {
            dispatch({
                type: RESET_CAPTCHA,
                resetCaptcha: true
            });
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
