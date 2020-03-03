import React from 'react';
import ReactDOM from 'react-dom';
import LandingPageContent from './LandingPageContent';

describe('LandingPageContent', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LandingPageContent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});