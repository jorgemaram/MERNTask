import React, { useContext, useEffect} from 'react';
import Project from './SingleProject';
import projectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProjects = () => {

    //Extraer proyectos del state inicial
    const projectsContext = useContext(projectContext);
    const { message, projects, getProjects } = projectsContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    //Obtener proyectos cuando carga el componente
    useEffect(() => {
        //si hay error
        if (message) {
            showAlert(message.msg, message.category)
        }
        getProjects();
    }, [message])
    
    //Comprobar si proyectos tiene contenido
    if (projects.length === 0) return <p>No hay proyectos, comienza creando uno.</p>;

    return ( 
        <ul className='listado-proyectos'>
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.message}</div>) : null}
            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition key={project._id} timeout={200} classNames='proyecto'>
                        <Project project={project} />
                    </CSSTransition>
                ))}
           </TransitionGroup>
        </ul>
     );
}
 
export default ListProjects;