import React from 'react';
import ReactDOM from 'react-dom';
import AccountSignUpForm from './AccountSignUpForm';

describe('AccountSignUpForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccountSignUpForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
