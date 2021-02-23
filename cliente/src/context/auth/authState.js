import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer'
import { SUCCESFULL_REGISTRATION, ERROR_REGISTRATION, GET_USER, SUCCESFULL_LOGIN, ERROR_LOGIN, LOGOUT } from '../../types';
import clientAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth'; 

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null,
        loading: true,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Funciones
    const registerUser = async data => {
        try {
            const answer = await clientAxios.post('api/usuarios', data);
            console.log(answer.data);

            dispatch({
                type: SUCCESFULL_REGISTRATION,
                payload: answer.data
            })
            //Obtener usuario
            userAuth();
        }catch (error){
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
        if(token) {
            tokenAuth(token);
        }
        try {
            const answer = await clientAxios.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: answer.data.user
            })
        } catch (error) {
            console.log(error.response)
            dispatch({
                type:ERROR_LOGIN
            })
        }
    }

    //Cuando el usuario inicia sesión
    const loginUser = async data => {
        try {
            const answer = await clientAxios.post('/api/auth', data);
            dispatch({
                type: SUCCESFULL_LOGIN,
                payload: answer.data
            })
            userAuth();
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: ERROR_LOGIN,
                payload: alert
            })
        }
    }

    //Cierra sesión del usuario
    const logoutUser = () => {
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <AuthContext.Provider value={{ token: state.token, auth: state.auth, user: state.user, message: state.message, loading:state.loading, registerUser, loginUser, userAuth, logoutUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthState; 