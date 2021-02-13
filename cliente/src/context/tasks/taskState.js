import React, {useReducer} from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';

import { TASKS_PROJECT, ADD_TASKS} from '../../types'

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: 'Elegir plataforma', state: true, projectId: 1 },
            { name: 'Elegir colores', state: false, projectId: 2 },
            { name: 'Elegir plataforma de pago', state: false, projectId: 3 },
            { name: 'Elegir hosting', state: true, projectId: 4 },
            { name: 'Elegir plataforma', state: true, projectId: 2 },
            { name: 'Elegir colores', state: false, projectId: 3 },
            { name: 'Elegir plataforma de pago', state: false, projectId: 4 },
            { name: 'Elegir hosting', state: true, projectId: 1 },
            { name: 'Elegir plataforma', state: true, projectId: 3 },
            { name: 'Elegir colores', state: false, projectId: 4 },
        ],
        tasksproject: null
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
        dispatch({
            type: ADD_TASKS,
            payload: task
        })
    }

    return (
        <taskContext.Provider value={{ tasks: state.tasks, tasksproject: state.tasksproject, getTasks, addTasks}}>
            {props.children}
        </taskContext.Provider>
    )
}

export default TaskState;