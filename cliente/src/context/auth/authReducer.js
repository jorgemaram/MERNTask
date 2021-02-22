import { SUCCESFULL_REGISTRATION, ERROR_REGISTRATION, GET_USER, SUCCESFULL_LOGIN, ERROR_LOGIN, LOGOUT } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case SUCCESFULL_REGISTRATION:
        case SUCCESFULL_LOGIN:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state, auth: true, message: null, loading: false
            }
        case LOGOUT:
        case ERROR_LOGIN:
        case ERROR_REGISTRATION:
            localStorage.removeItem('token');
            return {
                ...state, token: null, user: null, auth: null, message: action.payload, loading: false
            }
        case GET_USER:
            return {
                ...state, auth: true, user: action.payload, loading: false
            }
        default:
            return state;
    }
}