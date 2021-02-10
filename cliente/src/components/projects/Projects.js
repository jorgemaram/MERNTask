import React from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import FormTask from '../tasks/FormTask';
import ListTask from '../tasks/ListTask';



const Projects = () => {
    return (
        <div className='contenedor-app'>
            <aside>
                <Sidebar/>

            </aside>
            <div className='seccion-principal'>
                <Navbar/>
                <main>
                    <FormTask/>
                    <div className='contenedor-tareas'>
                        <ListTask/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Projects;