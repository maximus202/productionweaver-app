import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
    render() {
        return (
            <main>
                <header>
                    <h1>Login</h1>
                </header>
                <form>
                    <input type="email" id="email" name="email" placeholder="Email address" required />
                    <input type="password" id="password" name="password" placeholder="Password" required />
                    <input type="submit" id="login" name="login" placeholder="Login" />
                </form>
                <Link to="/sign-up">New user? Sign up!</Link>
            </main>
        )
    }
}

export default LoginForm;