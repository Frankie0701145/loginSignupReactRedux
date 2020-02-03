
import authenticate from './authenticate';
import addRemoveErrors from './addRemoveErrors';
import startEndCall from './startEndCall';



const ujumbeApp = (state={}, action)=>{
    return{
        signedIn: authenticate(state.signedIn, action),
        errors: addRemoveErrors(state.errors, action),
        isFetching: startEndCall(state.isFetching, action)
    }
};



export default ujumbeApp;
