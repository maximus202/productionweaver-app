import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';

class Login extends Component {
    render() {
        return (
            <>
                <Context.Consumer>
                    {(value) => {
                        return (
                            <main>
                                <header>
                                    <h1>Login</h1>
                                </header>
                                <section>
                                    <form onSubmit={(e) => value.handleSubmitJwtAuth(e, this.props.history)}>
                                        <input type="email" id="email" name="email" placeholder="Email address" onChange={value.handleSubmitLoginEmail} required />
                                        <input type="password" id="password" name="password" placeholder="Password" onChange={value.handleSubmitLoginPassword} required />
                                        <input type="submit" id="login" name="login" placeholder="Login" />
                                    </form>
                                </section>
                                <Link to="/sign-up">New user? Sign up!</Link>
                            </main>
                        )
                    }
                    }
                </Context.Consumer>
            </>
        )
    }
}

export default Login;