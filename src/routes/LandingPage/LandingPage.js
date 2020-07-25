import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './LandingPage.css';
import Footer from '../../components/Footer/Footer';

function LandingPage() {
  return (
    <>
      <NavBar />
      <header className="landing-page-header">
        <section>
          <h2>Simple, swift, film production management for indie filmmakers.</h2>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/login">Login</Link>
        </section>
      </header>
      <main>
        <section className="feature">
          <h2>Film production tools finally geared towards indie filmmakers.</h2>
          <p>
            Running your production on spreadsheets is a great solution... said no one ever.
            ProductionWeaver&apos;s mission is simple.
            Provide quality production tools to help you run your productions without spending
            Hollywood money.
          </p>
          <p>
            ProductionWeaver was designed out of the simple idea that independent filmmakers
            should be able to have access to production
            tools that don&apos;t cause dents into their already minimal budgets.
          </p>
          <p>
            During these early stages of development, you can
            use ProductionWeaver for free and try out the tools as they&apos;re released.
          </p>
          <p>
            The script breakdown tool is the very first tool to become available in
            ProductionWeaver! Breeze through your script breakdown process with this
            simple, mobile-friendly interface. Try it for free today!
          </p>
          <p>
            Tools coming soon: budgeting, shoot scheduling, shot listing, storyboarding,
            call sheets, contact management and more!
          </p>
          <h2>Script breakdowns</h2>
          <p>
            &quot;For your consideration... every element in your script!&quot;
          </p>
          <p>
            Keeping track of all the elements in your film, such as; wardrobe, props,
            and effects, are crucial in your pre-production days. Script breakdowns
            let&apos;s you easily add elements to every scene so you don&apos;t forget
            a thing on filming day.
          </p>
          <h2>Try it out!</h2>
          <p>
            Use Alfred Hitchcock&apos;s ProductionWeaver account to take it for a test
            drive, he won&apos;t mind!
          </p>
          <p>Simply login using:</p>
          <p>Email: ahitchcock@studio.com</p>
          <p>Password: iLovebirds*</p>
        </section>
        <section className="call-to-action">
          <section>
            <h2>Start using ProductionWeaver!</h2>
            <Link to="/sign-up">Get started</Link>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
