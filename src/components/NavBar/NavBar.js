import React from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

function NavBar() {
  return (
    <nav className="Header">
      <Logo />
      <Menu />
    </nav>
  );
}

export default NavBar;
