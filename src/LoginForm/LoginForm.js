import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';

class LoginForm extends Component {
    render() {
        return (
            <Context.Consumer>
                {(value) => {
                    return (
                        <main>
                            <header>
                                <h1>Login</h1>
                            </header>
                            <form onSubmit={(e) => value.handleSubmitJwtAuth(e)}>
                                <input type="email" id="email" name="email" placeholder="Email address" onChange={value.handleSubmitLoginEmail} required />
                                <input type="password" id="password" name="password" placeholder="Password" onChange={value.handleSubmitLoginPassword} required />
                                <input type="submit" id="login" name="login" placeholder="Login" />
                            </form>
                            <Link to="/sign-up">New user? Sign up!</Link>
                        </main>
                    )
                }
                }
            </Context.Consumer>
        )
    }
}

export default LoginForm;