import React from 'react';
import ReactDOM from 'react-dom';
import AddProductionForm from './AddProductionForm';

describe('AddProductionForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddProductionForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
