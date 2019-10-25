export const RESET_CAPTCHA = 'fayfay/register/resetCaptcha';

const initialState = {
    resetCaptcha: false
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case RESET_CAPTCHA:
            return {
                ...state,
                resetCaptcha: action.resetCaptcha
            };
        default:
            return state;
    }
}
