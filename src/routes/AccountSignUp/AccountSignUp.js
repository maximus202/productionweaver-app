import React from 'react';
import { Link } from 'react-router-dom';
import './AccountSignUp.css';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar/NavBar';
import AccountSignUpForm from '../../components/AccountSignUpForm/AccountSignUpForm';

function AccountSignUp(props) {
  const { history } = props;
  return (
    <>
      <NavBar />
      <header className="AccountSignUp__header">
        <section className="AccountSignUp__section">
          <h2>Create your account</h2>
        </section>
      </header>
      <main className="AccountSignUp__main">
        <section className="AccountSignUp__section">
          <AccountSignUpForm history={history} />
          <Link className="AccountSignUp__link" to="/login">Existing user?</Link>
        </section>
      </main>
    </>
  );
}

AccountSignUp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AccountSignUp;
