import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer'
import { SUCCESFULL_REGISTRATION, ERROR_REGISTRATION, GET_USER, SUCCESFULL_LOGIN, ERROR_LOGIN, LOGOUT } from "../../types";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Funciones

    return (
        <authContext.Provider value={{token: state.token, auth: state.auth, user: state.user, message: state.message}}>
            {props.children}
        </authContext.Provider>
    )
}
export default AuthState; 