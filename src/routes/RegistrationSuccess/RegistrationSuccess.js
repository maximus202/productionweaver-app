import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

class RegistrationSuccess extends Component {
    render() {
        return (
            <>
                <NavBar />
                <header>
                    <section>
                        <h1>You've created your account!</h1>
                    </section>
                </header>
                <main>
                    <section>
                        <Link to="/login">Log in ></Link>
                    </section>
                </main>
            </>
        )
    }
}

export default RegistrationSuccess;