import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import activityReducer from './reducers/activityReducers';
import cartReducer from './reducers/cartReducers';
import paymentReducer from './reducers/paymentReducers';
import ajaxStatusReducer from './reducers/ajaxStatusReducers';
import accountReducer from './reducers/accountReducers';
import searchReducer from './reducers/searchReducer';
import registerReducer from './reducers/registerReducer';

export default combineReducers({
    form: formReducer,
    register: registerReducer,
    ajaxStatus: ajaxStatusReducer,
    activity: activityReducer,
    cart: cartReducer,
    checkout: paymentReducer,
    account: accountReducer,
    search: searchReducer
})
