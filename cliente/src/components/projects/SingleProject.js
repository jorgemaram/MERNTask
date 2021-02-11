import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext'


const Project = ({ project }) => {
    
    //Obtener el state de proyectos
    const projectsContext = useContext(projectContext);
    const { presentProject  } = projectsContext;

    return ( 
        <li>
            <button type='button' className='btn btn-blank' onClick={() => presentProject(project.id)}>{project.name}</button>
        </li>

     );
}
 
export default Project;