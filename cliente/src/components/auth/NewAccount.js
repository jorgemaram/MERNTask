import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';


const NewAccount = () => {

    //extraer valores del context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    //definir State para crear sesión
    const [user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    //extraer del usuario
    const { name, email, password, confirm } = user;

    const onChange = e => {
        saveUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario quiera iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        //Validar campos completados
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '') {
            showAlert('Todos los campos son obligatrios', 'alerta-error');
            return;
        }

        //Password mínimo 6 caracteres
        if (password.length < 6) {
            showAlert('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        //Ambos passwords son iguales
        if (password !== confirm) {
            showAlert('La contraseña no coincide', 'alerta-error');
            return;
        }

        //Pasarlo al action


    }

    return (
        <div className='form-usuario'>
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className='contenedor-form sombra-dark'>
                <h1>Crea una cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className='campo-form'>
                        <label htmlFor='name'>Nombre</label>
                        <input type='text' id='name' name='name' placeholder='e.g. Jazmín, Florencio' onChange={onChange} value={name} />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' placeholder='Tu email' onChange={onChange} value={email} />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type='password' id='password' name='password' placeholder='Introduce tu contraseña' onChange={onChange} value={password} />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirm'>Confirmar contraseña</label>
                        <input type='password' id='confirm' name='confirm' placeholder='Repite tu contraseña' onChange={onChange} value={confirm} />
                    </div>
                    <div className='campo-form'>
                        <input type='submit' className='btn btn-primario btn-block' value='Registrarme' />
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta'>Ir a Iniciar sesión</Link>
            </div>
        </div>
    );
}

export default NewAccount;
