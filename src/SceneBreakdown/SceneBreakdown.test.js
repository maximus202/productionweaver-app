import React from 'react';
import ReactDOM from 'react-dom';
import SceneBreakdown from './SceneBreakdown';

describe('SceneBreakdown', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const match = {
            isExact: true,
            params: { projectId: "1", sceneId: "1" },
            path: "/script-breakdown/:projectId/scene-breakdown/:sceneId",
            url: "/script-breakdown/1/scene-breakdown/1",
        };
        ReactDOM.render(<SceneBreakdown match={match} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});