import { SUCCESFULL_REGISTRATION, ERROR_REGISTRATION, GET_USER, SUCCESFULL_LOGIN, ERROR_LOGIN, LOGOUT } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case SUCCESFULL_REGISTRATION:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state, auth: true, message: null
            }
        case ERROR_REGISTRATION:
            return {
                ...state, token: null, message: action.payload
            }
        case GET_USER:
            return {
                alert: null
            }
        case SUCCESFULL_LOGIN:
            return {
                alert: null
            }
        case ERROR_LOGIN:
            return {
                alert: null
            }
        case LOGOUT:
            return {
                alert: null
            }
        default:
            return state;
    }
}