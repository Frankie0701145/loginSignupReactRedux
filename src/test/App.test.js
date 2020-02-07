import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../containers/App';

test('test successful rendering of the App component', () => {
    render(<App />);
});

// // test('test the route login', ()=>{
// //     let {getByTestId, queryByTestId} = render(<App/>);
// //     //confirm that we are not in the login component
// //     expect(queryByTestId('loginBtn')).toBe(null);
// //     //load the login component
// //     let loginLink = getByTestId('loginLink');
// //     fireEvent.click(loginLink);
// //     //check if the loginBtn is there to confirm that we are in the login component
// //     expect(getByTestId('loginBtn')).toBeInTheDocument();
// // });

// // test('test the route signup', ()=>{
// //     let {getByTestId,queryByTestId} = render(<App/>);
// //     //confirm that we are not in the signup component
// //     expect(queryByTestId('signupBtn')).toBe(null);
// //     //load the signup component
// //     let signupLink = getByTestId('signupLink');
// //     fireEvent.click(signupLink);
// //     //check if the signupBtn is there to confirm that we are in the signup component
// //     expect(getByTestId('signupBtn')).toBeInTheDocument();
// // });
