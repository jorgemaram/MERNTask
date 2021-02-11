import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, FORM_CHECK, PRESENT_PROJECT, DELETE_PROJECT } from '../../types'

const ProjectState = props => {

    const projects = [
        { id: 1, name: 'Tienda virtual' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Diseño de sitio web' },
        { id: 4, name: 'MERN' },
    ]

    const initialState = {
        projects: [],
        form: false,
        formerror: false,
        project: null
    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initialState)

    //Funciones para el CRUD
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    //Obtener proyectos
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    //Agregar nuevo proyecto
    const addProject = project => {
        project.id = uuidv4();
        console.log(project.id)

        //insertar el proyecto en el state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    //Valida el formulario por errores
    const showError = () => {
        dispatch({
            type: FORM_CHECK
        })
    }

    //Selecciona el proyecto que el usuario dio click
    const presentProject = projectId => {
        dispatch({
            type: PRESENT_PROJECT,
            payload: projectId
        })
    }

    // Elimina un proyecto
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }


    return (
        <projectContext.Provider value={{ projects: state.projects, form: state.form, formerror: state.formerror, project: state.project, showForm, getProjects, addProject, showError, presentProject, deleteProject }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;