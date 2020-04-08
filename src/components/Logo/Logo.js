import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/"><img src="https://github.com/maximus202/productionweaver-app/blob/styling/public/PWlogocolor.png?raw=true" alt="ProductionWeaver logo." className="logo" /></Link>
  );
}

export default Logo;
