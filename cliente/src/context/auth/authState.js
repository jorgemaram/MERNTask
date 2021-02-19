import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer'
import { SUCCESFULL_REGISTRATION, ERROR_REGISTRATION, GET_USER, SUCCESFULL_LOGIN, ERROR_LOGIN, LOGOUT } from "../../types";
import clientAxios from '../../config/axios'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Funciones
    const registerUser = async data => {
        try {
            const answer = await clientAxios.post('api/usuarios', data);
            console.log(answer)
            dispatch({
                type: SUCCESFULL_REGISTRATION
            })
            
        }catch (error){
            console.log(error);
            dispatch({
                type: ERROR_REGISTRATION
            })
        }
    }

    return (
        <authContext.Provider value={{token: state.token, auth: state.auth, user: state.user, message: state.message, registerUser}}>
            {props.children}
        </authContext.Provider>
    )
}
export default AuthState; 