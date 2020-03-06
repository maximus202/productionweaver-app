import React from 'react';
import ReactDOM from 'react-dom';
import BreakdownCategories from './BreakdownCategories';

describe('BreakdownCategories', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const scene = { projectId: "1", sceneId: "1" };
        ReactDOM.render(<BreakdownCategories scene={scene} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});