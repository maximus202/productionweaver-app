import React from 'react';
import ReactDOM from 'react-dom';
import LoggedOut from './LoggedOut';

describe('LoggedOut', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoggedOut />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
