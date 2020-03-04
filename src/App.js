import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import AccountSignUp from './AccountSignUp/AccountSignUp';
import Login from './Login/Login';
import AccountDashboard from './AccountDashboard/AccountDashboard';

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
    </>
  );
}

export default App;