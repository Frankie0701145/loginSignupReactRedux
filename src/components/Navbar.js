import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from  './SignedOutLinks';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

export let Navbar = (props)=>{
    let {signedIn} = props;
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
                <NavLink to="/" className='brand-logo' data-testid="logo">
                    Ujumbe
                </NavLink>
                {navLinks()}
            </div>  
        </nav>
    )
};
const mapStateToProps = (state, ownProps)=>{
    return {
        signedIn: state.signedIn
    }
};
export default connect(mapStateToProps)(Navbar);