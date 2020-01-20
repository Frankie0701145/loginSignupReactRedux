import {REMOVE_ERRORS} from '../actions';

const removeErrors = ()=>{
    return{
        type: REMOVE_ERRORS,
        errors: []
    }
};

export default removeErrors;