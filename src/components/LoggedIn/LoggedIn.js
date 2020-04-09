import React from 'react';
import { Link } from 'react-router-dom';

function LoggedIn() {
  return (
    <div className="Menu__logged-out">
      <Link to="/sign-up">
        Get started
      </Link>
      <Link to="/login">
        Login
      </Link>
    </div>
  );
}

export default LoggedIn;
