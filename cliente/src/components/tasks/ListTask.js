import React, {useContext} from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext'

const ListTaks = () => {

    //Obtener proyecto del state inicial
    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    //Si no hay proyecto seleccionado
    if (!project)  return <h2>Selecciona un proyecto</h2>


    //Array destructuring para extraer el proyecto actual
    const [presentProject] = project; 

    const projectTasks = [
        { name: 'Elegir plataforma', state: true },
        { name: 'Elegir colores', state: false },
        { name: 'Elegir plataforma de pago', state: false },
        { name: 'Elegir hosting', state: true }
    ]

    //Eliminar proyecto
    const onClickDelete = () => {
        deleteProject(presentProject.id)
    }

    return (
        <>
            <h2>Proyecto: {presentProject.name}</h2>
            <ul className='listado-tareas'>
                {projectTasks.length === 0
                    ? (<li className='tarea'><p>No hay tareas</p></li>)
                    : projectTasks.map(task => (
                            <Task task={task} />))
                }
            </ul>
            <button type='button' className='btn btn-eliminar' onClick={onClickDelete}>Eliminar Proyecto &times;</button>
        </>
    );
}

export default ListTaks;