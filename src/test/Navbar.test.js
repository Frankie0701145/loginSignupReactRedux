import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {Navbar} from '../components/Navbar';

test('successfully rendering of the Navbar component', ()=>{
    const NavbarComponent = render(<BrowserRouter><Navbar/></BrowserRouter>);
});

test('Test if the Ujumbe is displayed in the navbar',()=>{
    let {getByTestId} = render(<BrowserRouter><Navbar signedIn={false}/></BrowserRouter>);
    expect(getByTestId('logo').textContent).toBe('Ujumbe');
});

test('Test if the signedOutLinks get displayed if the user is not signedIn', ()=>{
    let {getByTestId} = render(<BrowserRouter><Navbar signedIn={false}/></BrowserRouter>);
    expect(getByTestId('signedOutUI')).toBeInTheDocument();
});
test("Test if the signedInLinks get displayed if the signedIn props is true", ()=>{
    let {getByTestId} = render(<BrowserRouter><Navbar signedIn={true}/></BrowserRouter>);
    expect(getByTestId('signedInUI')).toBeInTheDocument();
});
test("Test if the signedInLinks get displayed if the signedIn props is true", ()=>{
    let {getByTestId} = render(<BrowserRouter><Navbar/></BrowserRouter>);
    expect(getByTestId('signedOutUI')).toBeInTheDocument();
});
