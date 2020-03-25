import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/Utils/PrivateRoute';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import LandingPage from './routes/LandingPage/LandingPage';
import AccountSignUp from './routes/AccountSignUp/AccountSignUp';
import Login from './routes/Login/Login';
import AccountDashboardPage from './routes/AccountDashboardPage/AccountDashboardPage';
import AddProduction from './AddProduction/AddProduction';
import ProductionPage from './routes/ProductionPage/ProductionPage';
import ScriptBreakdownPage from './routes/ScriptBreakdownPage/ScriptBreakdownPage';
import SceneBreakdown from './SceneBreakdown/SceneBreakdown';
import { Provider } from './Context/Context'
import RegistrationSuccess from './routes/RegistrationSuccess/RegistrationSuccess';
import AddScene from './AddScene/AddScene';

function App() {
  return (
    <>
      <NavBar />
      <Provider>
        <Route
          exact path="/home"
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
          exact path="/"
          component={AccountDashboardPage}
        />
        <PrivateRoute
          exact path="/production/:productionId"
          component={ProductionPage}
        />
        <PrivateRoute
          path="/add-production"
          render={({ history }) =>
            <AddProduction history={history} />
          }
        />
        <PrivateRoute
          exact path="/script-breakdown/:productionId"
          component={ScriptBreakdownPage}
        />
        <PrivateRoute
          exact path="/add-scene/:productionId"
          render={({ history }) =>
            <AddScene history={history} />}
        />
        <PrivateRoute
          exact path="/scene-breakdown/:productionId/:sceneId"
          render={({ history }) =>
            <SceneBreakdown history={history} />}
        />
      </Provider>
      <Footer />
    </>
  );
}

export default App;