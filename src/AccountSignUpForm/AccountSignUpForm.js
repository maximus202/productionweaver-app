import React, { Component } from 'react';
import './AccountSignUpForm.css';

class AccountSignUpForm extends Component {
    render() {
        return (
            <main>
                <header>
                    <h1>Account Sign Up</h1>
                </header>
                <section>
                    <form>
                        <input type="text" id="first-name" name="first-name" placeholder="First name" />
                        <input type="text" id="last-name" name="last-name" placeholder="Last name" />
                        <input type="email" id="email" name="email" placeholder="Email address" />
                        <input type="password" id="password" name="password" placeholder="Password" />
                        <input type="password" id="retype-password" name="retype-password" placeholder="Retype password" />
                        <input type="submit" id="submit" name="submit" placeholder="Submit" />
                    </form>
                    <button>Existing user? Click here</button>
                </section>
            </main>
        )
    }
}

export default AccountSignUpForm;