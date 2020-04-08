import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

describe('Menu', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Menu /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
