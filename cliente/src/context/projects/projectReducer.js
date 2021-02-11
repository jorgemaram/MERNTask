import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, FORM_CHECK, PRESENT_PROJECT, DELETE_PROJECT } from '../../types'


export default (state, action) => {
    switch (action.type) {
        case FORM_PROJECT: 
            return {
                ...state,
                form:true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                formerror: false
            }
        case FORM_CHECK:
            return {
                ...state,
                formerror: true
            }
        case PRESENT_PROJECT:
            return {
                ...state, 
                project: state.projects.filter(project => project.id === action.payload)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload),
                project: null
            }
        default: return state;
    }
}