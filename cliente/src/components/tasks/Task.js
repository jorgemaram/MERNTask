import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {

    //Obtener proyecto del state inicial
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //Obetner la función del context de tarea
    const tasksContext = useContext(taskContext);
    const { deleteTask, getTasks } = tasksContext;

    //Extraer el proyecto
    const [presentProject] = project;

    //Función que se ejecuta cuando el usuario presiona el botón de eliminar tarea
    const deleteATask = id => {
        deleteTask(id);
        getTasks(presentProject.id)
    }

    return ( 
        <li className='tarea sombra'>
            <p>{task.name}</p>
            <div className='estado'>
                {task.state ? (<button type='button' className='completo'>Completo</button>) : (<button type='button' className='incompleto'>Incompleto</button>)}
            </div>
            <div className='acciones'>
                <button type='button' className='btn btn-primario'>Editar</button>
                <button type='button' className='btn btn-secundario' onClick={() => deleteATask(task.id)}>Eliminar</button>
            </div>
        </li>
     );
}
 
export default Task;