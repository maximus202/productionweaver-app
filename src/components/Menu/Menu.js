import React from 'react';
// import './Menu.css';
import TokenService from '../../services/token-service';
import LoggedIn from '../LoggedIn/LoggedIn';
import LoggedOut from '../LoggedOut/LoggedOut';

function Menu() {
  return (
    <>
      {TokenService.hasAuthToken()
        ? <LoggedOut />
        : <LoggedIn />}
    </>
  );
}

export default Menu;
