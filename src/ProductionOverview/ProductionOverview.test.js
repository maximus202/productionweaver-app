import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProjectOverview from './ProductionOverview';

describe('ProjectOverview', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const match = {
            isExact: true,
            params: { projectId: "1" },
            path: "/project/:projectId",
            url: "/project/1"
        };
        ReactDOM.render(<BrowserRouter><ProjectOverview match={match} /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});