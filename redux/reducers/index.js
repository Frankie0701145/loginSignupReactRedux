import { LOGIN, LOGOUT,ADD_ERRORS, REMOVE_ERRORS } from 
  '../actions';


const initialState = {
    signedIn: false,
    errors: []
}

const ujumbeApp = (state = initialState, action)=>{
    switch(action.type){
        case LOGIN:
            return{ ...state, signedIn:true }
        case LOGOUT:
            return Object.assign({}, state, {signedIn: false})
        case ADD_ERRORS:
            return {...state, errors: action.errors}
        case REMOVE_ERRORS:
            return {...state, errors: []}
    }
    return state
}

export default ujumbeApp
