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
            console.log(answer.data)
            dispatch({
                type: SUCCESFULL_REGISTRATION,
                payload: answer.data
            })
            //Obtener usuario
            userAuth();
        }catch (error){
            //console.log(error.response);
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: ERROR_REGISTRATION,
                payload: alert
            })
        }
    }

    //Retorna el usuario autenticado
    const userAuth = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            //TODO: función para enviar el token por headers

        }
        try {
            const answer = await clientAxios.get('/api/auth');
            console.log(answer);
        } catch (error) {
            console.log(error)
            dispatch({
                type:ERROR_LOGIN
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