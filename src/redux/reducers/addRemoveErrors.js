import {ADD_ERRORS, REMOVE_ERRORS } from '../actions';


const addRemoveErrors = (state=[], action)=>{
    switch(action.type){
        case ADD_ERRORS:
            return action.errors
        case REMOVE_ERRORS:
            return []
        default:
            return state
    }
}

export default addRemoveErrors