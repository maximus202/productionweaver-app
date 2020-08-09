import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from '../../components/NavBar/NavBar';
import AccountSignUpForm from '../../components/AccountSignUpForm/AccountSignUpForm';
import './AccountSignUp.css';

function AccountSignUp(props) {
  const { history } = props;
  return (
    <>
      <NavBar />
      <header className="header-100vh grey-background">
        <section className="container">
          <h1>Create your account</h1>
          <main className="AccountSignUp__main">
            <AccountSignUpForm history={history} />
            <Link className="AccountSignUp__link" to="/login">Existing user?</Link>
          </main>
        </section>
      </header>
    </>
  );
}

AccountSignUp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AccountSignUp;
