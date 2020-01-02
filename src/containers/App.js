import React from 'react';

import './App.css';
import Navbar from '../components/Navbar'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Login from './Login';

function App(props) {
    return(
      <BrowserRouter>
        <div>
            <Navbar/>
        </div>
        <Route path='/login' component={Login}/>
      </BrowserRouter>
    )
}

export default App;
