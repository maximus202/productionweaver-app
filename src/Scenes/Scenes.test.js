import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Scenes from './Scenes';

describe('Scenes', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const project = { projectId: "1" };
        ReactDOM.render(<BrowserRouter><Scenes project={project} /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});