import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './LandingPage.css';
import Footer from '../../components/Footer/Footer';

class LandingPage extends Component {
    render() {
        return (
            <>
                <NavBar />
                <header className="landing-page-header">
                    <section>
                        <h1>Simple, swift, film production management.</h1>
                        <Link to="/sign-up">Sign Up</Link>
                        <Link to="/login">Login</Link>
                    </section>
                </header>
                <main>
                    <section className="feature">
                        <h2>Film production tools finally geared towards indie filmmakers.</h2>
                        <p>
                            Running your production on spreadsheets is a great solution... said no one ever. ProductionWeaver's mission is simple.
                            Provide quality production tools to help you run your productions without spending Hollywood money.
                        </p>
                        <p>
                            ProductionWeaver was designed out of the simple idea that independent filmmakers should be able to have access to production
                            tools that don't cause dents into their already minimal budgets.
                        </p>
                        <p>
                            During these early stages of development, you can
                            use ProductionWeaver for free and try out the tools as they're released.
                        </p>
                        <p>
                            The script breakdown tool is the very first tool to become available in ProductionWeaver! Breeze through
                            your script breakdown process with this simple, mobile-friendly interface. Try it for free today!
                        </p>
                        <p>
                            Tools coming soon: budgeting, shoot scheduling, shot listing, storyboarding, call sheets, contact management and more!
                        </p>
                    </section>
                    <div className="call-to-action">
                        <section>
                            <h2>Start using ProductionWeaver!</h2>
                            <Link to="/sign-up">Get started</Link>
                        </section>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}

export default LandingPage;