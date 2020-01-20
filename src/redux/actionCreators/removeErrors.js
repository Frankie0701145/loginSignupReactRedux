import {REMOVE_ERRORS} from '../actionsName';

const removeErrors = ()=>{
    return{
        type: REMOVE_ERRORS,
        errors: []
    }
};

export default removeErrors;