import startCall from './startCall';
import addErrors from './addErrors';
import endCall from './endCall';
import axios from 'axios';
import signupSuccess from './signupSuccess';

const signup = (userDetails)=>{
    return (dispatch)=>{
        dispatch(startCall());
        return axios.post('/users/signup', userDetails).then((response)=>{
                console.log(response);
                dispatch(endCall());
                dispatch(signupSuccess());
        }).catch((err)=>{
            let errors = err.response.data
            dispatch(addErrors(errors));   
            dispatch(endCall());
        });
    }
}

export default signup;