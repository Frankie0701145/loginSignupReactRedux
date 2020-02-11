import {ADD_SUCCESS_MESSAGES} from '../actionTypes'

const addSuccessMessages = (successMessages)=>{
    return {
        type: ADD_SUCCESS_MESSAGES,
        successMessages
    }
}

export default addSuccessMessages;