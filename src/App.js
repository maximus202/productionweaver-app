import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer.js';
import LandingPage from './LandingPage/LandingPage';
import AccountSignUp from './AccountSignUp/AccountSignUp';
import Login from './Login/Login';
import AccountDashboard from './AccountDashboard/AccountDashboard';
import AddProject from './AddProject/AddProject';
import ProjectOverview from './ProjectOverview/ProjectOverview';
import ScriptBreakdown from './ScriptBreakdown/ScriptBreakdown';
import SceneBreakdown from './SceneBreakdown/SceneBreakdown';
import { Provider } from './Context/Context'

function App() {
  return (
    <>
      <Provider>
        <Route
          exact path="/"
          component={LandingPage}
        />
        <Route
          path="/sign-up"
          render={({ history }) =>
            <AccountSignUp history={history} />
          }
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
          exact path="/project/:projectId"
          component={ProjectOverview}
        />
        <Route
          exact path="/script-breakdown/:projectId"
          component={ScriptBreakdown}
        />
        <Route
          exact path="/script-breakdown/:projectId/scene-breakdown/:sceneId"
          component={SceneBreakdown}
        />
      </Provider>
    </>
  );
}

export default App;