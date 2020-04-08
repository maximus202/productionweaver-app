import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.renderLogoutLink = this.renderLogoutLink.bind(this);
    this.renderLoginLink = this.renderLoginLink.bind(this);
  }

    handleLogoutClick = () => {
      TokenService.clearAuthToken();
    }

    renderLogoutLink() {
      return (
        <div className="Menu__logged-in">
          <Link
            onClick={this.handleLogoutClick}
            to="/"
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
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      );
    }
}

export default Menu;
