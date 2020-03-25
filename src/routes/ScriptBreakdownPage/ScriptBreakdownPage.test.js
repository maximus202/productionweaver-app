import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScriptBreakdown from './ScriptBreakdownPage';

describe('ScriptBreakdown', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const match = {
            isExact: true,
            params: { projectId: "1" },
            path: "/script-breakdown/:projectId",
            url: "/script-breakdown/1"
        };
        ReactDOM.render(<BrowserRouter><ScriptBreakdown match={match} /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});