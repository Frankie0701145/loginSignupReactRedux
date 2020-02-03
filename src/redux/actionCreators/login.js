import startCall from './startCall';
import addErrors from './addErrors';
import endCall from './endCall';
import loginSuccess from './loginSuccess';
import axios from 'axios';

const login = (credentials)=>{
    return (dispatch )=>{
        //dispatch the START_CALL action
        dispatch(startCall());
        let cre = {
            firstName: 'Francis',
            password: 'pass'
        }
        //post the credentials to the server     
        return axios.post('http://localhost:4000/users/login', credentials).then((response)=>{
              //dispatch the loginSuccess
              dispatch(loginSuccess());
              // dispatch the endCall
              dispatch(endCall());
        }).catch((err)=>{
            console.log(err);
            //call the action ADD_ERROR
            dispatch(addErrors(error));
            //call the END_CALL action.
            dispatch(endCall());
        });
    }
}

export default login;