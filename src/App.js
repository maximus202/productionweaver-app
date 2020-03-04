import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import AccountSignUp from './AccountSignUp/AccountSignUp';
import Login from './Login/Login';
import AccountDashboard from './AccountDashboard/AccountDashboard';
import AddProject from './AddProject/AddProject';
import ProjectOverview from './ProjectOverview/ProjectOverview';
import ScriptBreakdown from './ScriptBreakdown/ScriptBreakdown';

function App() {
  return (
    <>
      <Route
        exact path="/"
        component={LandingPage}
      />
      <Route
        path="/sign-up"
        component={AccountSignUp}
      />
      <Route
        path="/login"
        component={Login}
      />
      <Route
        path="/dashboard"
        component={AccountDashboard}
      />
      <Route
        path="/add-project"
        component={AddProject}
      />
      <Route
        exact path="/project/1"
        component={ProjectOverview}
      />
      <Route
        exact path="/project/1/script-breakdown"
        component={ScriptBreakdown}
      />
    </>
  );
}

export default App;