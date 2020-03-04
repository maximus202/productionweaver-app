import React from 'react';
import ReactDOM from 'react-dom';
import AddProjectForm from './AddProjectForm';

describe('AddProjectForm', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddProjectForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});