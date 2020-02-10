import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedInLinks = (props)=>{
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down" data-testid="signedInUI">
            <li>
                <NavLink to="#">FirstName</NavLink>
            </li>
            <li>
                <NavLink to="#">Log Out</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;