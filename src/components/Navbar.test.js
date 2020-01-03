import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';

test('successfully rendering of the Navbar component', ()=>{
    const NavbarComponent = render(<BrowserRouter><Navbar/></BrowserRouter>);
});