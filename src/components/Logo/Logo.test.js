import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';
import { BrowserRouter } from 'react-router-dom';

describe('Logo', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><Logo /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});