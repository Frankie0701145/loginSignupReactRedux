import LOGOUT from '../actions';


export const logout = (dispatch, getState)=>{
    return{
        type: LOGOUT
    }
}