import React, { useState } from 'react';
import {Link} from 'react-router-dom'


const Login = () => {

    //definir State para iniciar sesión
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    //extraer del usuario
    const { email, password } = user;

    const onChange = e => {
        saveUser({
            ...user, [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario quiera iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        //Validar campos completados

        
        //Pasarlo al action


    }

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar sesión</h1>
                <form onSubmit={onSubmit}>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' placeholder='Tu email' onChange={onChange} value={email}/>
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' id='password' name='password' placeholder='Introduce tu contraseña' onChange={onChange} value={password}/>
                    </div>
                    <div className='campo-form'>
                        <input type='submit' className='btn btn-primario btn-block' value='Iniciar sesión' />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className='enlace-cuenta'>Obtener cuenta</Link>
            </div>
        </div>
    );
}

export default Login;