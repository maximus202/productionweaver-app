import React, { Component } from 'react';
import './LandingPageContent.css';
import { Link } from 'react-router-dom';

class LandingPageContent extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <main>
                <header className="landing-page-header">
                    <h1>Simple, swift, film production management.</h1>
                    <Link to="/sign-up">Sign Up</Link>
                    <Link to="/login">Login here</Link>
                </header>
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
                <section className="call-to-action">
                    <h2>Start using ProductionWeaver!</h2>
                    <Link to="/sign-up">Get started</Link>
                </section>
            </main>
        )
    }
}

export default LandingPageContent;