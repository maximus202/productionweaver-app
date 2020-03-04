import React from 'react';
import ReactDOM from 'react-dom';
import ProjectOverviewContent from './ProjectOverviewContent';

describe('ProjectOverviewContent', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ProjectOverviewContent />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});