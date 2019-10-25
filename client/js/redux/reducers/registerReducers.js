export const REGISTER_DETAILS = 'fayfay/account/register';

const initialState = {
    userInfo: []
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case REGISTER_DETAILS:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        default:
            return state;
    }
}
