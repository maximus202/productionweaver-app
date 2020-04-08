import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

function RegistrationSuccess() {
  return (
    <>
      <NavBar />
      <header>
        <section>
          <h1>You&apos;ve created your account!</h1>
        </section>
      </header>
      <main>
        <section>
          <Link to="/login">Log in &gt;</Link>
        </section>
      </main>
    </>
  );
}

export default RegistrationSuccess;
