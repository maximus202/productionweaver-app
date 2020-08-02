import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

function RegistrationSuccess() {
  return (
    <>
      <NavBar />
      <header className="header-100vh">
        <section className="container">
          <h1>You&apos;ve created your account!</h1>
          <main>
            <Link to="/login">Log in &gt;</Link>
          </main>
        </section>
      </header>
    </>
  );
}

export default RegistrationSuccess;
