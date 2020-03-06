import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AccountSignUp from './AccountSignUp';

describe('AccountSignUp', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><AccountSignUp /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});