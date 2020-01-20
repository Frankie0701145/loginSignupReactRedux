import { LOGIN, LOGOUT } from 
  '../actionTypes';



const authenticate = (state=false, action)=>{

    switch(action.type){
        case LOGIN:
           return true
        case LOGOUT:
           return false
        default:
           return state
    }
};

export default authenticate;