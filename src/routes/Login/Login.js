/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';
import Loading from '../../components/Loading/Loading';
import './Login.css';

class Login extends Component {
    static contextType = Context

    renderLoginPage() {
      const {
        handleSubmitJwtAuth,
        handleSubmitLoginEmail,
        handleSubmitLoginPassword,
      } = this.context;
      const { history } = this.props;
      return (
        <>
          <NavBar />
          <header className="header-100vh">
            <section className="container">
              <h1>Login</h1>
              <main className="Login__main">
                <form onSubmit={(e) => handleSubmitJwtAuth(e, history)}>
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="Email" id="email" name="email" onChange={handleSubmitLoginEmail} required />
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="Password" id="password" name="password" onChange={handleSubmitLoginPassword} required />
                  <input className="button" type="submit" id="submit" name="login" placeholder="Login" />
                </form>
                <Link to="/sign-up">New user? Sign up!</Link>
              </main>
            </section>
          </header>
        </>
      );
    }

    render() {
      const { loading } = this.context;
      let content;
      if (loading === true) {
        content = <Loading />;
      } else {
        content = this.renderLoginPage();
      }
      return (
        <>
          {content}
        </>
      );
    }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Login;
