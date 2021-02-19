import { SUCCESFULL_REGISTRATION, ERROR_REGISTRATION, GET_USER, SUCCESFULL_LOGIN, ERROR_LOGIN, LOGOUT } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case SUCCESFULL_REGISTRATION:
            return {
                alert: action.payload
            }
        case ERROR_REGISTRATION:
            return {
                alert: null
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