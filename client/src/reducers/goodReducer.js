import {
    GET_GOODS,
    ADD_GOOD,
    DELETE_GOOD,
    GOODS_LOADING,
    GET_USE_CART
} from '../actions/types';

const initialState = {
    goods: [],
    loading: false,
    userGoods: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GOODS:
            return {
                ...state,
                goods: action.payload,
                loading: false
            };
        case GET_USE_CART:
            return {
                ...state,
                userGoods: action.payload,
                loading: false
            };
        case DELETE_GOOD:
            return {
                ...state,
                goods: state.goods.filter(good => good._id !== action.payload)
            };
        case ADD_GOOD:
            return {
                ...state,
                goods: [action.payload, ...state.goods]
            };
        case GOODS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
