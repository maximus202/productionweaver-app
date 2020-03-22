import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './RegistrationSuccess.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

class RegistrationSuccess extends Component {
    render() {
        return (
            <>
                <NavBar />
                <main>
                    <header>
                        <h1>You've created your account!</h1>
                    </header>
                    <section>
                        <Link to="/login">Log in ></Link>
                    </section>
                </main>
                <Footer />
            </>
        )
    }
}

export default RegistrationSuccess;