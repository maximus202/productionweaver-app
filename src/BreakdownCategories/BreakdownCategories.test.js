import React from 'react';
import ReactDOM from 'react-dom';
import BreakdownCategories from './BreakdownCategories';

describe('BreakdownCategories', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BreakdownCategories />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});