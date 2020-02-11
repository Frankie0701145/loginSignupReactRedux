import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import axios from 'axios';
import addUserDetails from '../redux/actionCreators/addUserDetails';
import loginSuccess from '../redux/actionCreators/loginSuccess';


export class App extends Component{
  componentDidMount(){
    let jwt = localStorage.getItem('jwt')
    if(jwt){
        axios.get(`/users/profile?accessToken=${jwt}`).then((user)=>{
            let userDetails = {
                firstName: user.data.firstName,
                lastName: user.data.lastName,
                activated: user.data.activated
            };
            console.log(this.props)
            this.props.addUserDetails(userDetails);
            this.props.loginSuccess();
        });
    }
  }
  render(){
    return(
         <BrowserRouter>
            <div>
                <Navbar/>
            </div>
            <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/' component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
  return {
      addUserDetails: (userDetails)=>{ dispatch(addUserDetails(userDetails)) },
      loginSuccess: ()=>{dispatch(loginSuccess())}
  }
}

export default connect(undefined, mapDispatchToProps)(App);
