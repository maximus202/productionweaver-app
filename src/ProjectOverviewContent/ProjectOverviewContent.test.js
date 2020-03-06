import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProjectOverviewContent from './ProjectOverviewContent';

describe('ProjectOverviewContent', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const project = { projectId: "1" };
        ReactDOM.render(<BrowserRouter><ProjectOverviewContent project={project} /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});