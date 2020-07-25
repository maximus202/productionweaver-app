import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
      <h1>
        <Link to="/"><img src="https://github.com/maximus202/productionweaver-app/blob/branding-update/public/pwlogo40h.png?raw=true" alt="ProductionWeaver. Simple, swift, film production management for indie filmmakers." className="logo" /></Link>
      </h1>
    </>
  );
}

export default Logo;
