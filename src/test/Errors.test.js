import React from 'react';
import { render,getNodeText } from '@testing-library/react';
import Errors from '../components/Errors';


test.only(" Test that the Errors component gets rendered and that the errors that gets passed through the props are displayed.", ()=>{

        let errorsProps = [
            {
                errorName: "Validation Error",
                errorMessage: "Password is required."
            },
            {
                errorName: "Validation Error",
                errorMessage: "Confirm Password is required."
            },
            {
                errorName: "Validation Error",
                errorMessage: "Password don't match confirm password."
            }
        ]
        
        let {getAllByTestId}= render(<Errors errors={errorsProps}/>);
        
        let errorsComponents = getAllByTestId('errors');

        let err = errorsComponents.map((error)=>{
                return getNodeText(error);
        });
          
        expect(err).toContain( " Password is required. " );
        expect(err).toContain(  " Confirm Password is required. ");
        expect(err).toContain(" Password don't match confirm password. ");
        
});