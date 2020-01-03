import React from 'react';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';

test('successfully rendering of the Navbar component', ()=>{
    const NavbarComponent = render(<BrowserRouter><Navbar/></BrowserRouter>);
});

test('Test if the Ujumbe is displayed in the navbar',()=>{
    let {getByTestId, rerender} = render(<BrowserRouter><Navbar signedIn={false}/></BrowserRouter>);
    expect(getByTestId('logo').textContent).toBe('Ujumbe');
});

test('Test if the signedOutLinks get displayed if the user is not signedIn', ()=>{
    let {getByText, rerender} = render(<BrowserRouter><Navbar signedIn={false}/></BrowserRouter>);
    expect(getByText("Log In")).toBeInTheDocument();
    expect(getByText("Sign Up")).toBeInTheDocument();
});
test("If the props signedIn is not provided that the signedOutLinks get displayed", ()=>{
    let {getByText, rerender} = render(<BrowserRouter><Navbar signedIn={false}/></BrowserRouter>);
    expect(getByText("Log In")).toBeInTheDocument();
    expect(getByText("Sign Up")).toBeInTheDocument();
});
// test('Test if the signedInLinks get displayed if the user is signedIn', ()=>{
//     let {getByText, rerender} = render(<BrowserRouter><Navbar signedIn={true}/></BrowserRouter>);
//     expect(getByText("Log In")).toBeInTheDocument();
//     expect(getByText("Sign Up")).toBeInTheDocument();
// });