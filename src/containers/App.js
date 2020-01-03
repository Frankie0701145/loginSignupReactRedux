import React from 'react';

import './App.css';
import Navbar from '../components/Navbar'
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App(props) {
    return(
      <BrowserRouter>
        <div>
            <Navbar/>
        </div>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
      </BrowserRouter>
    )
}

export default App;
