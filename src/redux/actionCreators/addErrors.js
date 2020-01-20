import {ADD_ERRORS} from '../actionTypes';

const addErrors = (errors)=>{
    return{
        type: ADD_ERRORS,
        errors
    }
}
export default addErrors;