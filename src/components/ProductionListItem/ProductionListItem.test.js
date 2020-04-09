import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProductionListItem from './ProductionListItem';

describe('ProductionListItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const production = {
      id: 1,
      production_title: 'test',
    };
    ReactDOM.render(
      <BrowserRouter>
        <ProductionListItem production={production} />
      </BrowserRouter>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
