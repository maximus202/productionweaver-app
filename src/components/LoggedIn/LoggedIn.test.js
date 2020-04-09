import React from 'react';
import ReactDOM from 'react-dom';
import LoggedIn from './LoggedIn';

describe('LoggedIn', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoggedIn />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
