import React from 'react';

import './App.css';
import Navbar from '../components/Navbar'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';

function App(props) {
    return(
      <BrowserRouter>
        <div>
            <Navbar/>
        </div>
      </BrowserRouter>
    )
}

export default App;
