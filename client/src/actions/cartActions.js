// import axios from 'axios';
// import { GET_CART, CHANGE_CART, DELETE_CART_ITEM, CART_LOADING, CART_COUNT } from './types';
// import { tokenConfig } from './authActions';
// import { returnErrors } from './errorActions';

// export const getCarts = () => (dispatch, getState) => {

//     dispatch(setCartLoading());
//     axios
//         .get('/api/cart', tokenConfig(getState))
//         .then(res =>
//             dispatch({
//                 type: GET_CART,
//                 payload: res.data
//             })
//         )
//         .catch(err =>
//             dispatch(returnErrors(err.response.data, err.response.status))
//         );
// };

// export const changeCart = cart => (dispatch, getState) => {

//     axios
//         .post('/api/cart', cart, tokenConfig(getState))
//         .then(res =>
//             {dispatch({
//                 type: CHANGE_CART,
//                 payload: res.data
//             })
//             return res
//             })
//         // .then((gas) => {

//         //     return gas
//         // })
//         .catch(err =>
//             dispatch(returnErrors(err.response.data, err.response.status))
//         );
// };

// export const deleteCartItem = id => (dispatch, getState) => {
//     axios
//         .delete(`/api/cart/${id}`, tokenConfig(getState))
//         .then(res =>
//             dispatch({
//                 type: DELETE_CART_ITEM,
//                 payload: id
//             })
//         )
//         .catch(err =>
//             dispatch(returnErrors(err.response.data, err.response.status))
//         );
// };

// export const setCartLoading = () => {
//     return {
//         type: CART_LOADING
//     };
// };

// export const getCartCount = (count) => {
//     return {
//         type: CART_COUNT
//     };
// };



import { CreateActionCreator } from 'helpers';
import { CART } from 'configs/types';

export const getCarts = _ => CreateActionCreator.read({
    path: 'cart',
    type: CART,
});

export const changeCart = (data) => CreateActionCreator.update({
    path: 'cart',
    type: CART,
    body: data
});

// export const updateStudents = (studentId, data) => CreateActionCreator.update({
//     path: `students/${studentId}`,
//     type: CART,
//     body: data
// });

// export const deleteStudents = (studentId) => CreateActionCreator.delete({
//     path: `students/${studentId}`,
//     type: CART
// });