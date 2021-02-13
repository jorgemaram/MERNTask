import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'


const Project = ({ project }) => {
    
    //Obtener el state de proyectos
    const projectsContext = useContext(projectContext);
    const { presentProject } = projectsContext;

    //Obetner la función del context de tarea
    const tasksContext = useContext(taskContext);
    const { getTasks} = tasksContext;

    //Función para añadir proyecto actual
    const chooseProject = id => {
        presentProject(id); //Fijar proyecto actual
        getTasks(id); //Filtrar tareas cuando damos click
        
    }

    return ( 
        <li>
            <button type='button' className='btn btn-blank' onClick={() => chooseProject(project.id)}>{project.name}</button>
        </li>

     );
}
 
export default Project;