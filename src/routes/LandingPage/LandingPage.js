import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './LandingPage.css';

class LandingPage extends Component {
    render() {
        return (
            <>
                <NavBar />
                <header className="landing-page-header">
                    <section>
                        <h1>Simple, swift, film production management.</h1>
                        <Link to="/sign-up">Sign Up</Link>
                        <Link to="/login">Login here</Link>
                    </section>
                </header>
                <main>
                    <section className="feature">
                        <h2>Script breakdown</h2>
                        <p>Breeze through your script breakdown process with ProductionWeaver's simple, mobile-friendly interface.</p>
                    </section>
                    <section className="feature">
                        <h2>Elements</h2>
                        <p>Every element in your productions needs fleshing out, use Elements to keep your thoughts, notes, and ideas in order.</p>
                    </section>
                    <section className="feature">
                        <h2>We're just getting started. Coming soon:</h2>
                        <p>Budgets<br />
                            Shooting schedules<br />
                            Shot lists<br />
                            Storyboards<br />
                            Call sheets<br />
                            Contact management<br />
                        </p>
                    </section>
                    <div className="call-to-action">
                        <section>
                            <h2>Start using Production Weaver!</h2>
                            <Link to="/sign-up">Get started</Link>
                        </section>
                    </div>
                </main>
            </>
        )
    }
}

export default LandingPage;