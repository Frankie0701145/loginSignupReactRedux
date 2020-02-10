
import authenticate from './authenticate';
import addRemoveErrors from './addRemoveErrors';
import startEndCall from './startEndCall';
import userDetails from './setUserDetails';


const ujumbeApp = (state={}, action)=>{
    return{
        signedIn: authenticate(state.signedIn, action),
        userDetails: userDetails(state.user, action),
        errors: addRemoveErrors(state.errors, action),
        isFetching: startEndCall(state.isFetching, action)
    }
};



export default ujumbeApp;
