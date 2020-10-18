import React from 'react';

import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PrivateRoute from './Utils/PrivateRoute';
import LandingPage from './routes/LandingPage/LandingPage';
import AccountSignUp from './routes/AccountSignUp/AccountSignUp';
import Login from './routes/Login/Login';
import AccountDashboardPage from './routes/AccountDashboardPage/AccountDashboardPage';
import AddProductionPage from './routes/AddProductionPage/AddProductionPage';
import ProductionPage from './routes/ProductionPage/ProductionPage';
import ScriptBreakdownPage from './routes/ScriptBreakdownPage/ScriptBreakdownPage';
import SceneBreakdownPage from './routes/SceneBreakdownPage/SceneBreakdownPage';
import { Provider } from './Context/Context';
import RegistrationSuccess from './routes/RegistrationSuccess/RegistrationSuccess';
import AddScenePage from './routes/AddScenePage/AddScenePage';
import AddElementPage from './routes/AddElementPage/AddElementPage';

function App() {
  return (
    <>
      <Layout>
        <Provider>
          <Route
            exact
            path="/home"
            component={LandingPage}
          />
          <Route
            path="/sign-up"
            component={AccountSignUp}
          />
          <Route
            path="/registrationsuccess"
            component={RegistrationSuccess}
          />
          <Route
            path="/login"
            component={Login}
          />
          <PrivateRoute
            exact
            path="/"
            component={AccountDashboardPage}
          />
          <PrivateRoute
            exact
            path="/production/:productionId"
            component={ProductionPage}
          />
          <PrivateRoute
            path="/add-production"
            component={AddProductionPage}
          />
          <PrivateRoute
            exact
            path="/script-breakdown/:productionId"
            component={ScriptBreakdownPage}
          />
          <PrivateRoute
            exact
            path="/add-scene/:productionId"
            component={AddScenePage}
          />
          <PrivateRoute
            exact
            path="/scene-breakdown/:sceneId"
            component={SceneBreakdownPage}
          />
          <PrivateRoute
            path="/add-element/:sceneId"
            component={AddElementPage}
          />
        </Provider>
      </Layout>
    </>
  );
}

export default App;
