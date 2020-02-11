import {ADD_SUCCESS_MESSAGES, REMOVE_SUCCESS_MESSAGES} from '../actionTypes';

const addRemoveSuccessMessages = (state = [], action)=>{
    switch(action.type){
        case ADD_SUCCESS_MESSAGES:
            return action.successMessages
        case REMOVE_SUCCESS_MESSAGES:
            return []
        default:
            return state;
    }
};

export default addRemoveSuccessMessages;