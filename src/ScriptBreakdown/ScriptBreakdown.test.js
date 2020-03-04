import React from 'react';
import ReactDOM from 'react-dom';
import ScriptBreakdown from './ScriptBreakdown';

describe('ScriptBreakdown', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ScriptBreakdown />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});