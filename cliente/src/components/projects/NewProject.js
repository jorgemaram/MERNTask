import React, {useState} from 'react';

const NewProject = () => {

    //definir state de los proyectos
    const [project, saveProject] = useState({
        name: ''
    });

    //Extraer nombre de proyecto
    const {name} = project

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

        //Agregar state

        //Reiniciar form
    }


    return (  
        <>
            <button type='button' className='btn btn-block btn-primario'>Nuevo Proyecto</button>
            <form className='formulario-nuevo-proyecto'>
                <input type='text' className='input-text' placeholder='Nombre Proyecto' name='name' value={name} onChange={onChangeProject}/>
                <input type='submit' className='btn btn-primario btn-block' value='Agregar Proyecto'/>

            </form>
        
        
        </>
    );
}
 
export default NewProject;