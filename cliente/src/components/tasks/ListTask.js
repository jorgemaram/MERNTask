import React from 'react';

import Task from './Task';

const ListTaks = () => {

    const projectTasks = [
        { name: 'Elegir plataforma', state: true },
        { name: 'Elegir colores', state: false },
        { name: 'Elegir plataforma de pago', state: false },
        { name: 'Elegir hosting', state: true }
    ]

    return (
        <>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className='listado-tareas'>
                {projectTasks.length === 0
                    ? (<li className='tarea'><p>No hay tareas</p></li>)
                    : projectTasks.map(task => (
                            <Task task={task} />))
                }
            </ul>
            <button type='button' className='btn btn-eliminar'>Eliminar Proyecto &times;</button>
        </>
    );
}

export default ListTaks;