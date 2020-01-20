import {ADD_ERRORS} from '../actionsName';

const addErrors = (errors)=>{
    return{
        type: ADD_ERRORS,
        errors
    }
}
export default addErrors;