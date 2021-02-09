import React from 'react';

const Navbar = () => {
    return ( 
        <header className='app-header'>
            <p className='nombre-usuario'>Hola <span>JOR</span> </p>
            <nav className='nav-principal'>
                <a href='#!'>Cerrar sesión</a>
            </nav>
        </header>
     );
}
 
export default Navbar;