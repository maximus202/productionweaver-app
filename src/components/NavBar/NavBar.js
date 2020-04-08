import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import TokenService from '../../services/token-service';

class NavBar extends Component {
    handleLogoutClick = () => {
      TokenService.clearAuthToken();
    }

    renderLogoutLink() {
      return (
        <div className="Menu__logged-in">
          <Link
            to="/"
          >
            Dashboard
          </Link>
          <Link
            onClick={this.handleLogoutClick}
            to="/login"
          >
            Logout
          </Link>
        </div>
      );
    }

    renderLoginLink() {
      return (
        <div className="Menu__logged-out">
          <Link to="/sign-up">
            Get started
          </Link>
          <Link to="/login">
            Login
          </Link>
        </div>
      );
    }

    render() {
      return (
        <nav className="Header">
          <Logo />
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      );
    }
}

export default NavBar;
