import axios from 'axios/index';
import {
    FETCH_COMPLETE,
    FETCH_PENDING,
    SERVER_ERROR,
    SUBMIT_COMPLETE,
    SUBMIT_PENDING
} from '../reducers/ajaxStatusReducers';
import {
    EMAIL_VERIFY,
    FETCH_BOOKINGS,
    FETCH_REVIEWS,
    FETCH_WISHLIST,
    FIELDS_TO_VERIFY,
    PHONE_VERIFY,
    REMOVE_FROM_WISHLIST,
    FETCH_COUPONS
} from '../reducers/accountReducers';

export function fetchCoupons() {
    return fetch(`/my-coupons`, FETCH_COUPONS);
}

export function addCoupon(code, formName) {
    return async dispatch => {
        dispatch({
            type: SUBMIT_PENDING,
            sendForm: formName
        });

        try {
            await axios.post(`/api/coupons/${code}`);
            dispatch({
                type: SUBMIT_COMPLETE
            });
        }
        catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            })
        }
    }
}

export function removeFromWishList(id) {
    return async dispatch => {

        try {
            await axios.delete(`/api/wishlists?activityId=${id}`);
            dispatch({
                type: REMOVE_FROM_WISHLIST,
                activityId: id
            });
        }
        catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            })
        }
    }
}

export function updateReviews(url, formData, callBack) {
    return async dispatch => {
        try {
            dispatch({
                type: SUBMIT_PENDING
            });

            const result = await axios.post(url, formData);

            dispatch({
                type: SUBMIT_COMPLETE
            });

            if (url.indexOf('k=') > -1) {
                if (result.status === 200) {
                    window.location.reload();
                }
            }
            else {
                if (result.status === 200) {
                    window.location = '/my-reviews';
                }
            }
        }
        catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }

        if (typeof callBack === 'function') {
            callBack();
        }
    };
}

export function fetchReviews(query) {
    return fetch(`/my-reviews${query}`, FETCH_REVIEWS);
}

export function fetchWishlist() {
    return fetch(`/wish-list`, FETCH_WISHLIST);
}

export function fetchBookings(query) {
    return fetch(`/my-bookings${query}`, FETCH_BOOKINGS);
}

const fetch = (url, actionType) => {
    return async dispatch => {
        dispatch({
            type: FETCH_PENDING
        });

        try {
            const response = await axios.get(url, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            dispatch({
                type: actionType,
                details: response.data
            });

            dispatch({
                type: FETCH_COMPLETE
            });
        }
        catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            })
        }
    }
};

export function goVerifyEmail(url, formData) {
    return sendValidation(url, formData, EMAIL_VERIFY)
}

export function goVerifyPhone(url, formData) {
    return sendValidation(url, formData, PHONE_VERIFY)
}

const sendValidation = (url, formData, actionType) => {
    return async dispatch => {
        dispatch({
            type: SUBMIT_PENDING
        });

        try {
            const response = await axios.put(url, formData);

            dispatch({
                type: actionType,
                passVerified: (response.status === 200)
            });

            dispatch({
                type: SUBMIT_COMPLETE
            });
        }
        catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            })
        }
    }
};

export const updateAccount = (url, formData, formName, method) => {
    return async dispatch => {

        try {
            dispatch({
                type: SUBMIT_PENDING,
                sendForm: formName
            });

            let result = {};
            if (method === 'put') {
                result = await axios.put(url, formData);
            }
            else if (method === 'patch') {
                result = await axios.patch(url, formData);
            }
            else {
                result = await axios.post(url, formData);
            }

            dispatch({
                type: FIELDS_TO_VERIFY,
                needToVerifyEmail: result.data.needToVerifyEmail
            });
            if (result.data.needToVerifyEmail){
                dispatch({
                    type: EMAIL_VERIFY,
                    passVerified: false
                });
            }

            dispatch({
                type: SUBMIT_COMPLETE
            });
        }
        catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            });
        }
    }
};

export const postValidationCode = (url, data, callback) => {
    return async dispatch => {
        dispatch({
            type: SUBMIT_PENDING
        });

        try {
            await new axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            dispatch({
                type: SUBMIT_COMPLETE
            });

            callback && typeof(callback) === 'function' && callback();
        }
        catch (error) {
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message
            })
        }
    }
};
