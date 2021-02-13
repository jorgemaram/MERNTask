import { TASKS_PROJECT, ADD_TASKS, TASK_CHECK, DELETE_TASK, STATE_TASK, PRESENT_TASK, UPDATE_TASK, CLEAN_TASK} from '../../types'
import TaskState from './taskState'


export default (state, action) => {
    switch (action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                tasksproject: state.tasks.filter(task => task.projectId === action.payload)
            }
        case ADD_TASKS:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                errortask: false
            }
        case TASK_CHECK:
            return {
                ...state,
                errortask: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case UPDATE_TASK:
        case STATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            }
        case PRESENT_TASK:
            return {
                ...state,
                chosentask: action.payload
            }
        case CLEAN_TASK:
            return {
                ...state,
                chosentask: null
            }
        default: return state;
    }
}