import React from 'react';
import ReactDOM from 'react-dom';
import AddProjectForm from './AddProductionForm';

describe('AddProjectForm', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddProjectForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});