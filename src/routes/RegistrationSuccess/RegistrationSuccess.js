import React, { Component } from 'react';
import './RegistrationSuccess.css';
import { Link } from 'react-router-dom';

class RegistrationSuccess extends Component {
    render() {
        return (
            <>
                <main>
                    <header>
                        <h1>You've created your account!</h1>
                    </header>
                    <section>
                        <Link to="/login">Log in ></Link>
                    </section>
                </main>
            </>
        )
    }
}

export default RegistrationSuccess;