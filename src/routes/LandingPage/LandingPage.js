import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './LandingPage.css';
import Footer from '../../components/Footer/Footer';

function LandingPage() {
  return (
    <>
      <NavBar />
      <header className="LandingPage__header header-100vh">
        <section className="container">
          <img className="header-image" src="https://github.com/maximus202/productionweaver-app/blob/branding-update/public/productionweaverhomeimg.png?raw=true" alt="A film director filming an actor with a camera" />
          <h1>The indie filmmaker&apos;s new superpower.</h1>
          <p>Running your productions should not cost half your budget. Write, plan, and run all your productions for $8 a month. Simple.</p>
          <Link to="/sign-up"><button type="button" className="button">Free Trial</button></Link>
          <Link to="/login"><button type="button" className="button outlined-button">Login</button></Link>
        </section>
      </header>
      <main>
        <section className="container centered">
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
        </section>
        <section className="container">
          <h3>Script breakdowns</h3>
          <p>
            &quot;For your consideration... every element in your script!&quot;
          </p>
          <p>
            Keeping track of all the elements in your film, such as; wardrobe, props,
            and effects, are crucial in your pre-production days. Script breakdowns
            let&apos;s you easily add elements to every scene so you don&apos;t forget
            a thing on filming day.
          </p>
        </section>
        <section className="container">
          <h3>Try it out!</h3>
          <p>
            Use Alfred Hitchcock&apos;s ProductionWeaver account to take it for a test
            drive, he won&apos;t mind!
          </p>
          <p>Simply login using:</p>
          <p>Email: ahitchcock@studio.com</p>
          <p>Password: iLovebirds*</p>
        </section>
        <section className="container">
          <h3>Get started in 60 seconds!</h3>
          <Link to="/sign-up">Get started</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
