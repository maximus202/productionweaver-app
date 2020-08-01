import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
      <Link to="/"><img src="https://github.com/maximus202/productionweaver-app/blob/branding-update/public/Bluelogo30h.png?raw=true" alt="ProductionWeaver. Simple, swift, film production management for indie filmmakers." className="logo" /></Link>
    </>
  );
}

export default Logo;
