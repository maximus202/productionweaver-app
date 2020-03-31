import React, { Component } from 'react';
import './RegistrationSuccess.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

class RegistrationSuccess extends Component {
    renderRegistrationSuccessPage() {
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

    render() {
        const { users } = this.context
        let content
        if (!users[0].id) {
            content = <div>Loading...</div>
        } else {
            content = this.renderRegistrationSuccessPage()
        }
        return (
            <>
                {content}
            </>
        )
    }
}

export default RegistrationSuccess;