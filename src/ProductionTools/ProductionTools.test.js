import React from 'react';
import ReactDOM from 'react-dom';
import ProductionTools from './ProductionTools';

describe('ProductionTools', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ProductionTools />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});