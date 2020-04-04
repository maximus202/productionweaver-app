import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';
import Loading from '../../components/Loading/Loading'

class Login extends Component {
    static contextType = Context

    renderLoginPage() {
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
                        <form onSubmit={(e) => this.context.handleSubmitJwtAuth(e, this.props.history)}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" onChange={this.context.handleSubmitLoginEmail} required />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={this.context.handleSubmitLoginPassword} required />
                            <input type="submit" id="submit" name="login" placeholder="Login" />
                        </form>
                        <Link to="/sign-up">New user? Sign up!</Link>
                    </section>
                </main>
            </>
        )
    }

    render() {
        const { loading } = this.context
        let content
        if (loading === true) {
            content = <Loading />
        } else {
            content = this.renderLoginPage()
        }
        return (
            <>
                {content}
            </>
        )
    }
}

export default Login;