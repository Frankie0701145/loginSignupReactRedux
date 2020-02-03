import React from 'react';
import { render } from '@testing-library/react';
import Login from '../containers/Login';

test('successful rendering of the Login component', () => {
    render(<Login />);
});

test("Test if the email and password inputs are present, have the required=true attribute and have name attribute with correct name", ()=>{
    let {getByTestId} = render(<Login/>);
    let email = getByTestId('email');
    let password = getByTestId('password');
    //test if the email and password is in the document
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    //test if the email and password input is required
    expect(email).toBeRequired();
    expect(password).toBeRequired();
    //test if they have name attribute with there corresponding values
    expect(email).toHaveAttribute('name', 'email');
    expect(password).toHaveAttribute('name', 'password');
});