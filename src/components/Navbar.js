import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from  './SignedOutLinks';
import {NavLink} from 'react-router-dom';

let Navbar = (props)=>{
    let signedIn = false;
    let navLinks = function(){
        if(signedIn){
            return(
                <SignedInLinks/>
            )
        }else{
            return(
                <SignedOutLinks/>
            )
        }
    }
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <NavLink to="/" className='brand-logo'>
                    Ujumbe
                </NavLink>
                {navLinks()}
            </div>  
        </nav>
    )
};

export default Navbar;