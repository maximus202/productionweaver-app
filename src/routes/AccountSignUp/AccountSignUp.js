/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import './AccountSignUp.css';
import NavBar from '../../components/NavBar/NavBar';

function AccountSignUp(props) {
  const { history } = props;
  return (
    <>
      <Context.Consumer>
        {(value) => (
          <>
            <NavBar />
            <header>
              <section>
                <h1>Create your account</h1>
              </section>
            </header>
            <main>
              <section>
                <form onSubmit={(e) => value.handleSubmitNewUser(e, history)}>
                  <label htmlFor="first-name">First name</label>
                  <input type="text" id="first-name" name="first-name" onChange={value.handleFirstNameInputChange} required />
                  <label htmlFor="last-name">Last name</label>
                  <input type="text" id="last-name" name="last-name" onChange={value.handleLastNameInputChange} required />
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" onChange={value.handleEmailInputChange} required />
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" onChange={value.handlePasswordInputChange} required />
                  <input type="submit" id="submit" name="submit" placeholder="Submit" />
                </form>
                <Link to="/login">Existing user?</Link>
              </section>
            </main>
          </>
        )}
      </Context.Consumer>
    </>
  );
}

export default AccountSignUp;
