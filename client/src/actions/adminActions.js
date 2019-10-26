import axios from 'axios';
import { returnErrors } from './errorActions';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    ADMIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from './types';

// Check token & load user
export const loginAdmin = ({ email, password }) => (dispatch) => {
    // User loading
    dispatch({ type: USER_LOADING });

    console.log('shssbsugsyjgsyj')
    const body = ({ email, password });
    console.log('body::', body)

    axios
        .post('/api/bk_map_19', body)
        .then(res =>
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'AUTH_ERROR'));
            dispatch({
                type: AUTH_ERROR
            });
        });
};

// Login User
// export const login = ({ email, password }) => dispatch => {
//     // Headers
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     // Request body
//     const body = JSON.stringify({ email, password });
//     console.log('body::', body)
//     axios
//         .post('/api/auth', body, config)
//         .then(res =>
//             dispatch({
//                 type: ADMIN_SUCCESS,
//                 payload: res.data
//             })
//         )
//         .catch(err => {
//             dispatch(
//                 returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
//             );
//             dispatch({
//                 type: LOGIN_FAIL
//             });
//         });
// };

// Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

// Setup config/headers and token
export const tokenConfig = getState => {
    // Get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
};
