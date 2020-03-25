import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer.js';
import LandingPage from './LandingPage/LandingPage';
import AccountSignUp from './AccountSignUp/AccountSignUp';
import Login from './Login/Login';
import AccountDashboardPage from './routes/AccountDashboardPage/AccountDashboardPage';
import AddProduction from './AddProduction/AddProduction';
import ProductionPage from './routes/ProductionPage/ProductionPage';
import ScriptBreakdownPage from './routes/ScriptBreakdownPage/ScriptBreakdownPage';
import SceneBreakdown from './SceneBreakdown/SceneBreakdown';
import { Provider } from './Context/Context'
import RegistrationSuccess from './RegistrationSuccess/RegistrationSuccess';
import AddScene from './AddScene/AddScene';

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
          path="/registrationsuccess"
          component={RegistrationSuccess}
        />
        <Route
          path="/login"
          render={({ history }) =>
            <Login history={history} />
          }
        />
        <Route
          exact path="/dashboard"
          component={AccountDashboardPage}
        />
        <Route
          exact path="/production/:productionId"
          component={ProductionPage}
        />
        <Route
          path="/add-production"
          render={({ history }) =>
            <AddProduction history={history} />
          }
        />
        <Route
          exact path="/script-breakdown/:productionId"
          component={ScriptBreakdownPage}
        />
        <Route
          exact path="/add-scene/:productionId"
          render={({ history }) =>
            <AddScene history={history} />}
        />
        <Route
          exact path="/scene-breakdown/:productionId/:sceneId"
          render={({ history }) =>
            <SceneBreakdown history={history} />}
        />
      </Provider>
    </>
  );
}

export default App;