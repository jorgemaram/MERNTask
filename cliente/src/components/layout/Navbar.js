import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {

    //Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { user, userAuth, logoutUser } = authContext;

    useEffect(() => {
        userAuth();
    }, []);


    return ( 
        <header className='app-header'>
            {user ? <p className='nombre-usuario'>Hola <span>{user.name}</span> </p> : null }
            <nav className='nav-principal'>
                <button className='btn btn-blank cerrar-sesion' onClick={() => logoutUser() }>Cerrar sesión</button>
            </nav>
        </header>
     );
}
 
export default Navbar;