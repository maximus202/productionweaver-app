import React from 'react';
import ReactDOM from 'react-dom';
import SceneBreakdown from './SceneBreakdown';

describe('SceneBreakdown', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SceneBreakdown />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});