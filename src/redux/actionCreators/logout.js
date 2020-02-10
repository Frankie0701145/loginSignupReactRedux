import logoutSuccess from './logoutSuccess';
import removeUserDetails from './removeUserDetails';


export const logout = ()=>{
    return (dispatch)=>{
        //remove the jwt in the local storage
        localStorage.removeItem("jwt");
        dispatch(logoutSuccess());
        dispatch(removeUserDetails());
    };
}