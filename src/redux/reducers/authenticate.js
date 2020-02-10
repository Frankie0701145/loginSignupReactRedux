import { LOGOUT, LOGIN_SUCCESS } from 
  '../actionTypes';



const authenticate = (state=false, action)=>{

    switch(action.type){
        case LOGIN_SUCCESS:
           return true
        case LOGOUT:
           return false
        default:
           return state
    }
};

export default authenticate;