import React, { useContext, useState} from 'react';
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'

const FormTarea = () => {

    //Obtener proyecto del state inicial
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    //Obetner la función del context de tarea
    const tasksContext = useContext(taskContext);
    const { errortask, addTasks, getTasks, checkTask } = tasksContext;

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
        if (name.trim() === '') {
            checkTask();
            return;
        }

        //pasar validación

        //agregar al state de tareas
        task.projectId = presentProject.id;
        task.state = false
        addTasks(task);

        //Obtener y filtrar las tareas del proyecto actual
        getTasks(presentProject.id)

        //reiniciar el form 
        saveTask({
            name: ''
        })
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
            {errortask ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
        </div>

    );
}

export default FormTarea;