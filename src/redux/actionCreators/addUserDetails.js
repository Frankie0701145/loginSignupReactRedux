import {ADD_USER_DETAILS} from '../actionTypes';


const addUserDetails = (userDetails)=>{
    return {
        type:ADD_USER_DETAILS,
        userDetails
    }
};

export default addUserDetails;