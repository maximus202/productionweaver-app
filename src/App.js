import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import AccountSignUp from './AccountSignUp/AccountSignUp';
import Login from './Login/Login';

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
    </>
  );
}

export default App;