import React, { Component } from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo.js';
import Menu from '../Menu/Menu.js';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';

class NavBar extends Component {
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
            <div className='Menu__logged-out'>
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
                <Logo />
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </nav>
        )
    }
}

export default NavBar;