import {
    ADMIN_LOADED,
    ADMIN_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADMIN_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case ADMIN_LOADED:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        default:
            return state;
    }
}
