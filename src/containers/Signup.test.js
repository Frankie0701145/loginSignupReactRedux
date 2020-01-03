import React from 'react';
import { render } from '@testing-library/react';
import Signup from './Signup';

test('test the rendering of the Signup component', () => {
    render(<Signup />);
});

test('test that the signup component has the firstName,lastName, homeAddress, workAddress, email, password and confirmPassword input and they have required=true attribute', 
    () => {
            let {getByTestId}=render(<Signup />);
            let firstName = getByTestId('firstName');
            let lastName = getByTestId('lastName');
            let homeAddress = getByTestId('homeAddress');
            let workAddress = getByTestId('workAddress');
            let email = getByTestId('email');
            let password = getByTestId('password');
            let confirmPassword = getByTestId('confirmPassword');

            //expect the inputs are there/
            expect(firstName).toBeInTheDocument();
            expect(lastName).toBeInTheDocument();
            expect(homeAddress).toBeInTheDocument();
            expect(workAddress).toBeInTheDocument();
            expect(email).toBeInTheDocument();
            expect(firstName).toBeInTheDocument();
            expect(password).toBeInTheDocument();
            expect(confirmPassword).toBeInTheDocument();
            //expect the inputs to be required
            expect(firstName).toBeRequired();
            expect(lastName).toBeRequired();
            expect(homeAddress).toBeRequired();
            expect(workAddress).toBeRequired();
            expect(email).toBeRequired();
            expect(firstName).toBeRequired();
            expect(password).toBeRequired();
            expect(confirmPassword).toBeRequired();
            
        }
);