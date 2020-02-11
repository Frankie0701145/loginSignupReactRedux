import {REMOVE_USER_DETAILS, ADD_USER_DETAILS} from '../actionTypes';


const userDetails = (state = {}, action)=>{
    switch(action.type){
        case REMOVE_USER_DETAILS:
            return {};
        case ADD_USER_DETAILS:
            return action.userDetails;
        default:
            return state;
    }
};

export default userDetails;