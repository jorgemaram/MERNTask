import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {

    //Obtener proyecto del state inicial
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //Obetner la función del context de tarea
    const tasksContext = useContext(taskContext);
    const { deleteTask, getTasks, updateTask, savePresentTask } = tasksContext;

    //Extraer el proyecto
    const [presentProject] = project;

    //Función que se ejecuta cuando el usuario presiona el botón de eliminar tarea
    const deleteATask = id => {
        deleteTask(id, presentProject._id);
        getTasks(presentProject.id)
    }

    //Función para modificar estado de tareas
    const changeState = task => {
        if (task.state) {
            task.state = false;
        } else {
            task.state = true;
        }
        updateTask(task)
    }

    //Añade tarea actual cuando el usuario quiere editarla
    const chooseTask = task => {
        savePresentTask(task);
    }

    return (
        <li className='tarea sombra'>
            <p>{task.name}</p>
            <div className='estado'>
                {task.state ? (<button type='button' className='completo' onClick={() => changeState(task)}>Completo</button>) : (<button type='button' className='incompleto' onClick={() => changeState(task)}>Incompleto</button>)}
            </div>
            <div className='acciones'>
                <button type='button' className='btn btn-primario' onClick={() => chooseTask(task)}>Editar</button>
                <button type='button' className='btn btn-secundario' onClick={() => deleteATask(task._id)}>Eliminar</button>
            </div>
        </li>
    );
}

export default Task;