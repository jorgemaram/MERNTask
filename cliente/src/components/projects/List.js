import React from 'react';
import Project from './SingleProject'

const ListProjects = () => {

    const projects = [
        {name: 'Tienda virtual'},
        {name: 'Intranet'},
        {name: 'Diseño de sitio web'},
    ]

    return ( 
        <ul className='listado-proyectos'>
            {projects.map(project => (
                <Project project={project}/>
            ))}
        </ul>
     );
}
 
export default ListProjects;