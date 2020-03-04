import React from 'react';
import ReactDOM from 'react-dom';
import ScenesList from './ScenesList';

describe('ScenesList', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ScenesList />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});