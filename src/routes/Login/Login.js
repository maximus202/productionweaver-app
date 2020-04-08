import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';
import Loading from '../../components/Loading/Loading';

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
          <header>
            <section>
              <h1>Login</h1>
            </section>
          </header>
          <main>
            <section>
              <form onSubmit={(e) => handleSubmitJwtAuth(e, history)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleSubmitLoginEmail} required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleSubmitLoginPassword} required />
                <input type="submit" id="submit" name="login" placeholder="Login" />
              </form>
              <Link to="/sign-up">New user? Sign up!</Link>
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
  history: PropTypes.oneOfType([
    PropTypes.string,
  ]).isRequired,
};

export default Login;
