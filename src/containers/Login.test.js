import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('successful rendering of the Login component', () => {
    render(<Login />);
});

test("Test if the email and password inputs are present", ()=>{
    let {getByTestId} = render(<Login/>);
    let email = getByTestId('email');
    let login = getByTestId('password');
    expect(email).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(email).toBeRequired();
    expect(login).toBeRequired();
});