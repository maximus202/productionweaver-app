import React, { Component } from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo.js';
import Menu from '../Menu/Menu.js';

class NavBar extends Component {
    render() {
        return (
            <section>
                <Logo />
                <Menu />
            </section>
        )
    }
}

export default NavBar;