import React, { Component } from 'react';
import './AccountSignUpForm.css';
import { Link } from 'react-router-dom';

class AccountSignUpForm extends Component {
    render() {
        return (
            <main>
                <header>
                    <h1>Account Sign Up</h1>
                </header>
                <section>
                    <form>
                        <input type="text" id="first-name" name="first-name" placeholder="First name" required />
                        <input type="text" id="last-name" name="last-name" placeholder="Last name" required />
                        <input type="email" id="email" name="email" placeholder="Email address" required />
                        <input type="password" id="password" name="password" placeholder="Password" required />
                        <input type="password" id="retype-password" name="retype-password" placeholder="Retype password" required />
                        <input type="submit" id="submit" name="submit" placeholder="Submit" />
                    </form>
                    <Link to="/login">Existing user? Login here!</Link>
                </section>
            </main>
        )
    }
}

export default AccountSignUpForm;