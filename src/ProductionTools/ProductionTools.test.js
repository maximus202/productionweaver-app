import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProductionTools from './ProductionTools';

describe('ProductionTools', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const project = { projectId: "1" };
        ReactDOM.render(<BrowserRouter><ProductionTools project={project} /></BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});