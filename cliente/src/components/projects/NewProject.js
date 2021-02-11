import React, { useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext'

const NewProject = () => {

    //Obtener el state del formulario
    const projectsContext = useContext(projectContext);
    const { form, formerror, showForm, addProject, showError } = projectsContext;

    //definir state de los proyectos
    const [project, saveProject] = useState({
        name: ''
    });

    //Extraer nombre de proyecto
    const { name } = project;

    //Lee contenidos del input
    const onChangeProject = e => {
        saveProject({
            ...project, [e.target.name]: e.target.value
        })
    }

    // Cuando usuario envia proyecto
    const onSubmitProject = e => {
        e.preventDefault();

        //Validar proyecto
        if (name === '') {
            showError();
            return;
        }
        //Agregar state
        addProject(project)

        //Reiniciar form
        saveProject({
            name: ''
        })
    }

    //Mostrar formulario
    const onClickForm = () => {
        showForm();
    }

    return (
        <>
            <button type='button' className='btn btn-block btn-primario' onClick={onClickForm}>Nuevo Proyecto</button>

            {form ?
                (
                    <form className='formulario-nuevo-proyecto' onSubmit={onSubmitProject}>
                        <input type='text' className='input-text' placeholder='Nombre Proyecto' name='name' value={name} onChange={onChangeProject} />
                        <input type='submit' className='btn btn-primario btn-block' value='Agregar Proyecto' />
                    </form>
                )
                : null
            }
            {formerror ? <p className='mensaje error'>El nombre del proyecto es obligatorio</p> : null}
        </>
    );
}

export default NewProject;