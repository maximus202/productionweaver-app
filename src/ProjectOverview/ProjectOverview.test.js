import React from 'react';
import ReactDOM from 'react-dom';
import ProjectOverview from './ProjectOverview';

describe('ProjectOverview', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ProjectOverview />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});