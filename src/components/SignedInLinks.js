import React from 'react';
import {NavLink} from 'react-router-dom'

const logout = (props)=>{
    props.logoutSuccess();
    props.removeUserDetail();
    localStorage.removeItem('jwt');
}

const SignedInLinks = (props)=>{
    console.log(props);
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down" data-testid="signedInUI">
            <li>
                <NavLink to="#">{props.firstName}</NavLink>
            </li>
            <li>
                <NavLink to="#" onClick={(e)=>{logout(props)}}>Log Out</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;