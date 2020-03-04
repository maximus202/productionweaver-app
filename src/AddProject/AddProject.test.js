import React from 'react';
import ReactDOM from 'react-dom';
import AddProject from './AddProject';

describe('AddProject', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddProject />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});