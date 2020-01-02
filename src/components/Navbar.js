import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from  './SignedOutLinks'

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
                <a href="#" class='brand-logo'>
                    Ujumbe
                </a>
                {navLinks()}
            </div>  
        </nav>
    )
};

export default Navbar;