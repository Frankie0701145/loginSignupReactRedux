import {START_CALL, END_CALL} from '../actionTypes';


const startEndCall = (state = false, action)=>{
    switch(action.type){
        case START_CALL:
            return true
        case END_CALL:
            return false
        default:
            return false
    }
}