import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedInLinks = (props)=>{
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <NavLink><NavLink to="#">FirstName</NavLink></NavLink>
            <NavLink><NavLink to="#">Log Out</NavLink></NavLink>
        </ul>
    )
}

export default SignedInLinks;