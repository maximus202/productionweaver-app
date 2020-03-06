import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AccountSignUpForm from './AccountSignUpForm';

describe('AccountSignUpForm', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><AccountSignUpForm /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});