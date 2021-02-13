import React, { useContext, useEffect} from 'react';
import Project from './SingleProject';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListProjects = () => {

    //Extraer proyectos del state inicial
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;
    
    useEffect(() => {
        getProjects()
    }, [])
    
    //Comprobar si proyectos tiene contenido
    if (projects.length === 0) return <p>No hay proyectos, comienza creando uno.</p>;

    return ( 
        <ul className='listado-proyectos'>
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition key={project.id} timeout={200} classNames='proyecto'>
                        <Project project={project} />
                    </CSSTransition>
                ))}
           </TransitionGroup>
        </ul>
     );
}
 
export default ListProjects;