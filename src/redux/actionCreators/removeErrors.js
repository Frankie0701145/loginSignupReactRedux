import {REMOVE_ERRORS} from '../actionTypes';

const removeErrors = ()=>{
    return{
        type: REMOVE_ERRORS,
        errors: []
    }
};

export default removeErrors;