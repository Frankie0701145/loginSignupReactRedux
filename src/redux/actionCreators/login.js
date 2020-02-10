import startCall from './startCall';
import addErrors from './addErrors';
import endCall from './endCall';
import removeErrors from './removeErrors';
import loginSuccess from './loginSuccess';
import addUserDetails from './addUserDetails'
import axios from 'axios';

const login = (credentials)=>{
    return (dispatch )=>{
        //dispatch remove errors
        dispatch(removeErrors());
        //dispatch the START_CALL action
        dispatch(startCall());
        //post the credentials to the server     
        return axios.post('/users/login', credentials).then((response)=>{
              //dispatch the loginSuccess
              let data =  response.data;
              localStorage.setItem("jwt", data.accessToken);
              let userDetails = {
                  accessToken: response.data.accessToken,
                  firstName: data.firstName,
                  lastName: data.lastName,
                  homeCoordinate: data.homeCoordinate,
                  workCoordinate: data.workCoordinate,
                  activated: data.activated
              }
              dispatch(addUserDetails(userDetails));
              dispatch(loginSuccess(userDetails));
              dispatch(endCall());
        }).catch((err)=>{
            let errors =[{
                errorMessage: err.response.data.message,
                errorName: err.response.statusText
            }];
            //call the action ADD_ERROR
            dispatch(addErrors(errors));
            //call the END_CALL action.
            dispatch(endCall());
        });
    }
}

export default login;