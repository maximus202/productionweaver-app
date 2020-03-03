import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import AccountSignUp from './AccountSignUp/AccountSignUp';

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
    </>
  );
}

export default App;