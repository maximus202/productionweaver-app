import React, { Component } from 'react';
import './Menu.css';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';

class Menu extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <div className='Menu__logged-in'>
                <Link
                    onClick={this.handleLogoutClick}
                    to="/">
                    Logout
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='Menu__logged-out>'>
                <Link to='/sign-up'>
                    Get started
                </Link>
                <Link to="/login">
                    Login
                </Link>
            </div>
        )
    }

    render() {
        return (
            <nav className="Header">
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </nav>
        )
    }
}

export default Menu;