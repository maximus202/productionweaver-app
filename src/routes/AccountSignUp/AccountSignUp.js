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
      <header>
        <section>
          <h2>Create your account</h2>
        </section>
      </header>
      <main>
        <section>
          <AccountSignUpForm history={history} />
          <Link to="/login">Existing user?</Link>
        </section>
      </main>
    </>
  );
}

AccountSignUp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AccountSignUp;
