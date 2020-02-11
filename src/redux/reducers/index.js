
import authenticate from './authenticate';
import addRemoveErrors from './addRemoveErrors';
import startEndCall from './startEndCall';
import userDetails from './userDetails';
import addRemoveSuccessMessages from './addRemoveSuccessMessages';


const ujumbeApp = (state={}, action)=>{
    return{
        signedIn: authenticate(state.signedIn, action),
        userDetails: userDetails(state.userDetails, action),
        errors: addRemoveErrors(state.errors, action),
        isFetching: startEndCall(state.isFetching, action),
        successMessages: addRemoveSuccessMessages(state.successMessages, action)
    }
};



export default ujumbeApp;
