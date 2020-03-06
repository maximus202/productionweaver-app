import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LandingPageContent from './LandingPageContent';

describe('LandingPageContent', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter><LandingPageContent /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});