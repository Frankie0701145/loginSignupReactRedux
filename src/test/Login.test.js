import React from 'react';
import { render } from '@testing-library/react';
import {Login} from '../containers/Login';

test('successful rendering of the Login component', () => {
    render(<Login errors={[]} />);
});

test("Test if the email and password inputs are present, have the required=true attribute and have name attribute with correct name", ()=>{
    let {getByTestId} = render(<Login errors={[]}/>);
    let email = getByTestId('email');
    let password = getByTestId('password');
    let confirmPassword = getByTestId('confirmPassword');
    //test if the email and password is in the document
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(confirmPassword).toBeInTheDocument();
    //test if the email and password input is required
    expect(email).toBeRequired();
    expect(password).toBeRequired();
    expect(confirmPassword).toBeRequired();
    //test if they have name attribute with there corresponding values
    expect(email).toHaveAttribute('name', 'email');
    expect(password).toHaveAttribute('name', 'password');
    expect(confirmPassword).toHaveAttribute('name','confirmPassword');
});

test("Test if the progress div gets added if the isFetching is true and that the login button has disabled as true", ()=>{
    let {getByTestId} = render(<Login errors={[]} isFetching={true}/>);
    let progressDIV = getByTestId("progress");
    expect(progressDIV).toBeInTheDocument(progressDIV);
    let loginBtn = getByTestId("loginBtn");
    expect(loginBtn).toHaveAttribute('disabled');
});

test("Test if the progress div is not added if the isFetching is false and that the login button has disabled as false",()=>{
    let {getByTestId, queryByTestId} = render(<Login errors={[]} isFetching={false}/>);
    let progressDIV = queryByTestId("progress");
    expect(progressDIV).toBe(null);
    let loginBtn = getByTestId("loginBtn");
    expect(loginBtn).not.toHaveAttribute('disabled');
});