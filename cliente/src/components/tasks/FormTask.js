import React, { useContext, useState} from 'react';
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const FormTarea = () => {

    //Obtener proyecto del state inicial
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //Obetner la función del context de tarea
    const tasksContext = useContext(taskContext);
    const { addTasks } = tasksContext;

    //State del formulario
    const [task, saveTask] = useState({
        name: '',
    })

    //extraer nombre del proyecto
    const { name } = task;

    //Si no hay proyecto seleccionado
    if (!project) return null;


    //Array destructuring para extraer el proyecto actual
    const [presentProject] = project; 

    //Leer valores del formulario
    const handleChange = e => {
        saveTask({...task, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar

        //pasar validación

        //agregar al state de tareas
        task.projectId = presentProject.id;
        task.state = false
        addTasks(task);

        //reiniciar el form 
    }


    return (
        <div className='formulario'>
            <form onSubmit={onSubmit}>
                <div className='contenedor-input'>
                    <input type='text' className='input-text' placeholder='Nombre Tarea...' name='name' value={name} onChange={handleChange}/>
                </div>
                <div className='contenedor-input'>
                    <input type='submit' className='btn btn-primario btn-submit btn-block' value='Agregar tarea' />
                </div>
            </form>
        </div>

    );
}

export default FormTarea;