import { LOGIN, LOGOUT,ADD_ERRORS, REMOVE_ERRORS } from 
  '../actionTypes';
import authenticate from './authenticate';
import addRemoveErrors from './addRemoveErrors';
import startEndCall from './startEndCall';

// const initialState = {
//     signedIn: false,
//     errors: []
// }

const ujumbeApp = (state={}, action)=>{
    return{
        signedIn: authenticate(state.signedIn, action),
        errors: addRemoveErrors(state.errors, action),
        isFetching: startEndCall(state.isFetching, action)
    }
};

// const ujumbeApp = (state = initialState, action)=>{
//     switch(action.type){
//         case LOGIN:
//             return{ ...state, signedIn:true }
//         case LOGOUT:
//             return Object.assign({}, state, {signedIn: false})
//         case ADD_ERRORS:
//             return {...state, errors: action.errors}
//         case REMOVE_ERRORS:
//             return {...state, errors: []}
//         default:
//             return state
//     }
// }

export default ujumbeApp;
