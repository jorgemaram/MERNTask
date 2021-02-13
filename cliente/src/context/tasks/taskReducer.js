import { TASKS_PROJECT, ADD_TASKS } from '../../types'


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
                tasks: [...state.tasks, action.payload]
            }
        default: return state;
    }
}