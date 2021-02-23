import { TASKS_PROJECT, ADD_TASKS, TASK_CHECK, DELETE_TASK, PRESENT_TASK, UPDATE_TASK, CLEAN_TASK} from '../../types'


export default (state, action) => {
    switch (action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                tasksproject: action.payload
            }
        case ADD_TASKS:
            return {
                ...state,
                tasksproject: [...state.tasksproject, action.payload],
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
                tasksproject: state.tasksproject.filter(task => task._id !== action.payload)
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasksproject: state.tasksproject.map(task => task._id === action.payload._id ? action.payload : task)
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