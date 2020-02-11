import startCall from './startCall';
import addErrors from './addErrors';
import removeErrors from './removeErrors';
import endCall from './endCall';
import axios from 'axios';
import signupSuccess from './signupSuccess';
import addSuccessMessages from './addSuccessMessages';

const signup = (userDetails)=>{
    return (dispatch)=>{
        dispatch(startCall());
        dispatch(removeErrors());
        return axios.post('/users/signup', userDetails).then((response)=>{
                console.log(response);
                dispatch(endCall());
                dispatch(signupSuccess());
                let successMessages = [
                    {successMessage: `Signup successful. Please click on the link sent to your email to activate account. ${response.data.email}`}
                ];
                dispatch(addSuccessMessages(successMessages));
        }).catch((err)=>{
            let errors = err.response.data
            dispatch(addErrors(errors));   
            dispatch(endCall());
        });
    }
}

export default signup;