import React from 'react';
import ReactDOM from 'react-dom';
import AddElementForm from './NewElementForm';

describe('AddElementForm', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddElementForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});