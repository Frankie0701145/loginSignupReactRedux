import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedOutLinks = (props)=>{
    return(

        <ul id="nav-mobile" className="right hide-on-med-and-down" data-testid="signedOutUl">
                <li>
                    <NavLink to="/login" data-testid="loginLink">Log In</NavLink>
                </li>
                <li>
                    <NavLink to="/signup" data-testid="signupLink">Sign Up</NavLink>
                </li>
        </ul>
    )
} 
export default SignedOutLinks;