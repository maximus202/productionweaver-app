import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';

class Login extends Component {
    render() {
        return (
            <>
                <Context.Consumer>
                    {(value) => {
                        return (
                            <>
                                <NavBar />
                                <header>
                                    <section>
                                        <h1>Login</h1>
                                    </section>
                                </header>
                                <main>
                                    <section>
                                        <form onSubmit={(e) => value.handleSubmitJwtAuth(e, this.props.history)}>
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" onChange={value.handleSubmitLoginEmail} required />
                                            <label htmlFor="password">Password</label>
                                            <input type="password" id="password" name="password" onChange={value.handleSubmitLoginPassword} required />
                                            <input type="submit" id="submit" name="login" placeholder="Login" />
                                        </form>
                                        <Link to="/sign-up">New user? Sign up!</Link>
                                    </section>
                                </main>
                            </>
                        )
                    }
                    }
                </Context.Consumer>
            </>
        )
    }
}

export default Login;