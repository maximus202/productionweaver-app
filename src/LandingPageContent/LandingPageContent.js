import React, { Component } from 'react';
import './LandingPageContent.css'

class LandingPageContent extends Component {
    render() {
        return (
            <>
                <section class="header">
                    <h1>Simple, swift, film production management.</h1>
                    <button>Sign up</button>
                    <button>Login</button>
                </section>
                <section class="feature">
                    <h2>Script breakdown</h2>
                    <p>Breeze through your script breakdown process with ProductionWeaver's simple, mobile-friendly interface.</p>
                </section>
                <section class="feature">
                    <h2>Elements</h2>
                    <p>Every element in your productions needs fleshing out, use Elements to keep your thoughts, notes, and ideas in order.</p>
                </section>
                <section class="feature">
                    <h2>We're just getting started. Coming soon:</h2>
                    <p>Budgets<br />
                        Shooting schedules<br />
                        Shot lists<br />
                        Storyboards<br />
                        Call sheets<br />
                        Contact management<br />
                    </p>
                </section>
                <section class="call-to-action">
                    <h2>Start using ProductionWeaver!</h2>
                    <button>Get started</button>
                </section>
            </>
        )
    }
}

export default LandingPageContent;