import axios from 'axios';
import * as cons from './types';

export const authUser = (formValues, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signup', formValues);
        dispatch({
            type: cons.AUTH_USER,
            payload: response.data.token
        });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({
            type: cons.AUTH_ERROR,
            payload: 'Email is in use'
        });
    }
};

export const signin = (formValues, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signin', formValues);
        dispatch({
            type: cons.AUTH_USER,
            payload: response.data.token
        });
        localStorage.setItem('token', response.data.token);
        callback();
    } catch (e) {
        dispatch({
            type: cons.AUTH_ERROR,
            payload: 'Invalid ccredentials'
        });
    }
};

export const signout = () => {
    localStorage.removeItem('token');

    return {
        type: cons.AUTH_USER,
        payload: ''
    };
};