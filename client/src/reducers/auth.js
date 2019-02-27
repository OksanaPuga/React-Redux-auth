import * as cons from '../actions/types';

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cons.AUTH_USER:
            return { ...state, authenticated: action.payload };
        case cons.AUTH_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
}