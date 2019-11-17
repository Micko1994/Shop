import axios from 'axios';
import { GET_GOODS, ADD_GOOD, DELETE_GOOD, UPDATE_GOODS, GOODS_LOADING, GET_USE_CART } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getGoods = (goods_type) => dispatch => {
    dispatch(setGoodsLoading());
    axios
        .get('/api/goods', {
            params: {
                goods_type
            }
          })
        .then(res =>
            dispatch({
                type: GET_GOODS,
                payload: res.data
            })
            // return res.data
        )
        // .then((data) => {

        //     return data
        // })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addGoods = item => (dispatch, getState) => {
    axios
        .post('/api/goods', item, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_GOOD,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const updateGoods = (item, id) => (dispatch, getState) => {
    axios
        .patch(`/api/goods/${id}`, item, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: UPDATE_GOODS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteGoods = id => (dispatch, getState) => {
    axios
        .delete(`/api/goods/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_GOOD,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const getUserCart = () => (dispatch, getState) => {

    dispatch(setGoodsLoading());
    axios
        .get('/api/goods/user_cart', tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_USE_CART,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};


export const setGoodsLoading = () => {
    return {
        type: GOODS_LOADING
    };
};
