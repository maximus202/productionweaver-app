/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';
import Loading from '../../components/Loading/Loading';
// import './Login.css';

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
          <header className="Login__header">
            <section className="Login__section">
              <h2>Login</h2>
            </section>
          </header>
          <main className="Login__main">
            <section className="Login__section">
              <form className="Login__form" onSubmit={(e) => handleSubmitJwtAuth(e, history)}>
                <label htmlFor="email">Email</label>
                <input className="Login__input" type="email" placeholder="Email" id="email" name="email" onChange={handleSubmitLoginEmail} required />
                <label htmlFor="password">Password</label>
                <input className="Login__input" type="password" placeholder="Password" id="password" name="password" onChange={handleSubmitLoginPassword} required />
                <input type="submit" id="submit" name="login" placeholder="Login" />
              </form>
              <Link className="Login__link" to="/sign-up">New user? Sign up!</Link>
            </section>
          </main>
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
