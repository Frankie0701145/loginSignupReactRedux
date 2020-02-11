import React from 'react';
import { render,getNodeText } from '@testing-library/react';
import {SuccessMessages} from '../containers/SuccessMessages';


test("Test that the SuccessMessages get rendered with the successMessages",()=>{
    let expectedSuccessMessages = [
        {successMessage: "Login successfully."},
        {successMessage: "Created successfully."}
    ]
    let {getAllByTestId}= render(<SuccessMessages successMessages={expectedSuccessMessages}/>);
    let successMessagesComponents = getAllByTestId('successMessages');
    let successMessages = successMessagesComponents.map((error)=>{
        return getNodeText(error);
    });
    expect(successMessages).toContain(" Login successfully. ");
    expect(successMessages).toContain(" Created successfully. ");
});