import React, { useContext} from 'react';
import projectContext from '../../context/projects/projectContext'

const FormTarea = () => {

    //Obtener proyecto del state inicial
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //Si no hay proyecto seleccionado
    if (!project) return null;


    //Array destructuring para extraer el proyecto actual
    const [presentProject] = project; 


    return (
        <div className='formulario'>
            <form>
                <div className='contenedor-input'>
                    <input type='text' className='input-text' placeholder='Nombre Tarea...' name='name' />
                </div>
                <div className='contenedor-input'>
                    <input type='submit' className='btn btn-primario btn-submit btn-block' value='Agregar tarea' />
                </div>
            </form>
        </div>

    );
}

export default FormTarea;