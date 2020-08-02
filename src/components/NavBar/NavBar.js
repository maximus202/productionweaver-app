import React from 'react';
import './NavBar.css';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

function NavBar() {
  return (
    <nav>
      <section className="container nav">
        <Logo />
        <Menu />
      </section>
    </nav>
  );
}

export default NavBar;
