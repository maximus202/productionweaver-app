import React, { Component } from 'react';
import './RegistrationSuccess.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

class RegistrationSuccess extends Component {
    render() {
        return (
            <>
                <NavBar />
                <header>
                    <h1>You've created your account!</h1>
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