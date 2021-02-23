import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import clientAxios from '../../config/axios';
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, FORM_CHECK, PRESENT_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from '../../types'

const ProjectState = props => {

    const initialState = {
        projects: [],
        form: false,
        formerror: false,
        project: null,
        message: null
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
    const getProjects = async () => {
        try {
            const result = await clientAxios.get('/api/proyectos');
            dispatch({
                type: GET_PROJECTS,
                payload: result.data.projects
            })
        } catch (error) {
            console.log(error)
        }
    }

    //Agregar nuevo proyecto
    const addProject = async project => {
        try {
            const result = await clientAxios.post('api/proyectos', project)
            //insertar el proyecto en el state
            dispatch({
                type: ADD_PROJECT,
                payload: result.data
            })
        } catch (error) {
         console.log(error)   
        }
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
    const deleteProject = async projectId => {
        try {
            await clientAxios.delete(`/api/proyectos/${projectId}`);
            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            })
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alerta-error'
            }
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
        
    }


    return (
        <projectContext.Provider value={{ projects: state.projects, form: state.form, formerror: state.formerror, project: state.project, message: state.message, showForm, getProjects, addProject, showError, presentProject, deleteProject }}>
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;