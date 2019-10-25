import axios from 'axios';
import {
    SERVER_ERROR, SUBMIT_PENDING, SUBMIT_COMPLETE, RESET_STATUS
} from '../reducers/ajaxStatusReducers'
import { RESET_CAPTCHA } from "../reducers/registerReducer";
import { reset } from 'redux-form';

export const postFormData = (url, formData, formName, method, resetForm = false) => {
    return async dispatch => {

        try {
            dispatch({
                type: SUBMIT_PENDING,
                sendForm: formName
            });

            if (method === 'put') {
                await axios.put(url, formData);
            } else if (method === 'patch') {
                await axios.patch(url, formData);
            } else {
                await axios.post(url, formData);
            }

            dispatch({
                type: SUBMIT_COMPLETE
            });

            if (resetForm) {
                dispatch(reset(formName));
                dispatch({
                    type: RESET_CAPTCHA,
                    resetCaptcha: true
                });
            }
        } catch (error) {
            dispatch({
                type: RESET_CAPTCHA,
                resetCaptcha: true
            });
            dispatch({
                type: SERVER_ERROR,
                serverStatus: error.response.status,
                serverMessage: error.response.data.message,
                serverErrors: error.response.data.errors
            });
        }
    };
};


export const subscribe = (email) => {
    return async dispatch => {

        try {
            dispatch({
                type: SUBMIT_PENDING
            });

            await axios.post('/public/subscribe', { email });

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
};

export const resetAjaxStatus = () => {
    return async dispatch => {
        dispatch({
            type: RESET_STATUS
        })
    }
};
