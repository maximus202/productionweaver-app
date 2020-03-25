import React from 'react';
import ReactDOM from 'react-dom';
import AccountDashboard from './AccountDashboardPage';

describe('AccountDashboard', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AccountDashboard />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});