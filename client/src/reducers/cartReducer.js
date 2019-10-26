// import {
//     GET_CART,
//     CHANGE_CART,
//     DELETE_CART_ITEM,
//     CART_LOADING,
//     CART_COUNT
// } from '../actions/types';

// const initialState = {
//     cart: [],
//     count: 0,
//     loading: false
// };

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case GET_CART:
//             return {
//                 ...state,
//                 cart: action.payload,
//                 count: action.payload.cart.goods.reduce((prev, cur) => prev + cur.count, 0),
//                 loading: false
//             };
//         case DELETE_CART_ITEM:
//             return {
//                 ...state,
//                 cart: state.cart.filter(c => c._id !== action.payload)
//             };
//         case CHANGE_CART:
//             return {
//                 ...state,
//                 cart: [ action.payload, ...state.cart ]
//             };
//         case CART_LOADING:
//             return {
//                 ...state,
//                 loading: true
//             };
//         case CART_COUNT:
//             return {
//                 ...state,
//                 count: action.payload
//             };
//         default:
//             return state;
//     }
// }


import { createReducer } from 'helpers';
import {
    CART,
} from 'configs/types';

export const cartReducer = createReducer(CART);