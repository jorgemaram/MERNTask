import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import taskContext from './taskContext';
import taskReducer from './taskReducer';

import { TASKS_PROJECT, ADD_TASKS, TASK_CHECK, DELETE_TASK, STATE_TASK, PRESENT_TASK, UPDATE_TASK, CLEAN_TASK} from '../../types'

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 1, name: 'Elegir plataforma', state: true, projectId: 1 },
            { id: 2, name: 'Elegir colores', state: false, projectId: 2 },
            { id: 3, name: 'Elegir plataforma de pago', state: false, projectId: 3 },
            { id: 4, name: 'Elegir hosting', state: true, projectId: 4 },
            { id: 5, name: 'Elegir plataforma', state: true, projectId: 2 },
            { id: 6, name: 'Elegir colores', state: false, projectId: 3 },
            { id: 7, name: 'Elegir plataforma de pago', state: false, projectId: 4 },
            { id: 8, name: 'Elegir hosting', state: true, projectId: 1 },
            { id: 9, name: 'Elegir plataforma', state: true, projectId: 3 },
            { id: 10, name: 'Elegir colores', state: false, projectId: 4 },
        ],
        tasksproject: null,
        errortask: false,
        chosentask: null
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(taskReducer, initialState);

    //Crear funciones
    //Obtener tareas de un proyecto
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    //Añadir tareas al proyecto seleccionado
    const addTasks = task => {
        task.id = uuidv4();
        dispatch({
            type: ADD_TASKS,
            payload: task
        })
    }

    //Valida y muestra error en caso de que sea necesario
    const checkTask = () => {
        dispatch({
            type: TASK_CHECK
        })
    }

    //Eliminar tarea por su id
    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    //Cambia estado de cada tarea
    const changeStateTask = task => {
        dispatch({
            type: STATE_TASK,
            payload: task
        })
    }

    //Extrae tarea para edición
    const savePresentTask = task => {
        dispatch({
            type: PRESENT_TASK,
            payload: task
        })
    }

    //Edita o modifica una tarea
    const uploadTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    //Elimina tarea seleccionada
    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }

    return (
        <taskContext.Provider value={{ tasks: state.tasks, tasksproject: state.tasksproject, errortask: state.errortask, chosentask: state.chosentask, getTasks, addTasks, checkTask, deleteTask, changeStateTask, savePresentTask, uploadTask, cleanTask }}>
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState;