import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import FormTask from '../tasks/FormTask';
import ListTask from '../tasks/ListTask';
import AuthContext from '../../context/auth/authContext';



const Projects = () => {

    //Extraer información de autenticación
    const authContext = useContext(AuthContext);
    const { userAuth } = authContext;

    useEffect(() => {
        userAuth();
        // eslint-disable-next-line
    }, [])
    return (
        <div className='contenedor-app'>
            <aside>
                <Sidebar />

            </aside>
            <div className='seccion-principal'>
                <Navbar />
                <main>
                    <FormTask />
                    <div className='contenedor-tareas'>
                        <ListTask />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Projects;