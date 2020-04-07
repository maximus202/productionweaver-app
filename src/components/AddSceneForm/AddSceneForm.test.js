import React from 'react';
import ReactDOM from 'react-dom';
import AddSceneForm from './AddSceneForm';

describe('AddSceneForm', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddSceneForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});