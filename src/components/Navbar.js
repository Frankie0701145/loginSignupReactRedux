import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from  './SignedOutLinks';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import logoutSuccess from '../redux/actionCreators/logoutSuccess';
import removeUserDetails from '../redux/actionCreators/removeUserDetails';

export let Navbar = (props)=>{
    let {signedIn,logoutSuccess, removeUserDetail, firstName} = props;

    let navLinks = function(){
        if(signedIn){
            return(
                <SignedInLinks firstName={firstName} logoutSuccess={logoutSuccess} removeUserDetail={removeUserDetail}/>
            )
        }else{
            return(
                <SignedOutLinks/>
            )
        }
    }

    console.log(props);
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
        signedIn: state.signedIn,
        firstName: state.userDetails.firstName
    }
};
const mapDispatchToProps = (dispatch, ownProps)=>{
    return {
        logoutSuccess: ()=>{dispatch(logoutSuccess())},
        removeUserDetail: ()=>{dispatch(removeUserDetails())}
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);