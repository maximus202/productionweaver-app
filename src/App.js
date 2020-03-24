import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer.js';
import LandingPage from './LandingPage/LandingPage';
import AccountSignUp from './AccountSignUp/AccountSignUp';
import Login from './Login/Login';
import AccountDashboard from './AccountDashboard/AccountDashboard';
import AddProduction from './AddProduction/AddProduction';
import ProductionOverview from './ProductionOverview/ProductionOverview';
import ScriptBreakdown from './ScriptBreakdown/ScriptBreakdown';
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
          path="/dashboard"
          component={AccountDashboard}
        />
        <Route
          path="/add-production"
          render={({ history }) =>
            <AddProduction history={history} />
          }
        />
        <Route
          exact path="/productions/:productionId"
          render={({ history }) =>
            <ProductionOverview history={history} />}
        />
        <Route
          exact path="/scenes/:productionId"
          render={({ history }) =>
            <ScriptBreakdown history={history} />}
        />
        <Route
          exact path="/add-scene"
          render={({ history }) =>
            <AddScene history={history} />}
        />
        <Route
          exact path="/elements/:sceneId"
          render={({ history }) =>
            <SceneBreakdown history={history} />}
        />
      </Provider>
    </>
  );
}

export default App;