import {ADD_ERRORS} from '../actions';

const addErrors = (errors)=>{
    return{
        type: ADD_ERRORS,
        errors
    }
}
export default addErrors;