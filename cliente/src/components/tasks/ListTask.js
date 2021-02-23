import React, { useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListTaks = () => {

    //Obtener proyecto del state inicial
    const projectsContext = useContext(projectContext);
    const { project, deleteProject } = projectsContext;

    //Obetner las tareas del proyecto
    const tasksContext = useContext(taskContext);
    const { tasksproject } = tasksContext;

    //Si no hay proyecto seleccionado
    if (!project) return <h2>Selecciona un proyecto</h2>;


    //Array destructuring para extraer el proyecto actual
    const [presentProject] = project;

    //Eliminar proyecto
    const onClickDelete = () => {
        deleteProject(presentProject._id)
    }

    return (
        <>
            <h2>Proyecto: {presentProject.name}</h2>
            <ul className='listado-tareas'>
                {tasksproject === 0
                    ? (<li className='tarea'><p>No hay tareas</p></li>)
                    :
                    <TransitionGroup>
                    {tasksproject.map(task => (
                            <CSSTransition key={task.id} timeout={200} classNames='tarea'>
                                <Task task={task} />
                            </CSSTransition>))}
                    </TransitionGroup>
                }
            </ul>
            <button type='button' className='btn btn-eliminar' onClick={onClickDelete}>Eliminar Proyecto &times;</button>
        </>
    );
}

export default ListTaks;