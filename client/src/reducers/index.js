import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';
import goodsReducer from './goodReducer';
import adminReducer from './adminReducer';
import {cartReducer} from './cartReducer';

export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer,
    user: userReducer,
    product: productReducer,
    good: goodsReducer,
    admin: adminReducer,
    cart: cartReducer
});
