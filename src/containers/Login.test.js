import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('successful rendering of the Login component', () => {
    render(<Login />);
});