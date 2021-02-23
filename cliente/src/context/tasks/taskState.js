import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import { TASKS_PROJECT, ADD_TASKS, TASK_CHECK, DELETE_TASK, PRESENT_TASK, UPDATE_TASK, CLEAN_TASK } from '../../types';

import clientAxios from '../../config/axios';

const TaskState = props => {
    const initialState = {
        tasksproject: [],
        errortask: false,
        chosentask: null
    }

    //Crear dispatch y state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    //Crear funciones
    //Obtener tareas de un proyecto
    const getTasks = async project => {
        console.log(project); 

        try {
            const result = await clientAxios.get('/api/tareas', { params: { project } });
            console.log(result)
            dispatch({
                type: TASKS_PROJECT,
                payload: result.data.tasks
            })

        } catch (error) {
            console.log(error)
        }
    }

    //Añadir tareas al proyecto seleccionado
    const addTasks = async task => {
        try {
            const result = await clientAxios.post('/api/tareas', task);
            dispatch({
                type: ADD_TASKS,
                payload: task
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Valida y muestra error en caso de que sea necesario
    const checkTask = () => {
        dispatch({
            type: TASK_CHECK
        })
    }

    //Eliminar tarea por su id
    const deleteTask = async (id, project) => {
        try {
            await clientAxios.delete(`/api/tasks/${id}`, { params: { project } });
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Edita o modifica una tarea
    const updateTask = async task => {
        try {
            const result = await clientAxios.put(`/api/tareas/${task._id}`, task);
            dispatch({
                type: UPDATE_TASK,
                payload: result.data.task
            })
        } catch (error) {
            console.log(error)
        }
    }

    //Extrae tarea para edición
    const savePresentTask = task => {
        dispatch({
            type: PRESENT_TASK,
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
        <TaskContext.Provider value={{ tasksproject: state.tasksproject, errortask: state.errortask, chosentask: state.chosentask, getTasks, addTasks, checkTask, deleteTask, savePresentTask, updateTask, cleanTask }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;