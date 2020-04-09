import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

class LoggedOut extends Component {
    handleLogoutClick = () => {
      TokenService.clearAuthToken();
    }

    render() {
      return (
        <div className="Menu__logged-in">
          <Link
            to="/"
          >
            Dashboard
          </Link>
          <Link
            onClick={this.handleLogoutClick}
            to="/"
          >
            Logout
          </Link>
        </div>
      );
    }
}

export default LoggedOut;
