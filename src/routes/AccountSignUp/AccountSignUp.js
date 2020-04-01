import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import './AccountSignUp.css';
import NavBar from '../../components/NavBar/NavBar';

class AccountSignUp extends Component {
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
                                        <h1>Create your account</h1>
                                    </section>
                                </header>
                                <main>
                                    <section>
                                        <form onSubmit={(e) => value.handleSubmitNewUser(e, this.props.history)}>
                                            <input type="text" id="first-name" name="first-name" placeholder="First name" onChange={value.handleFirstNameInputChange} required />
                                            <input type="text" id="last-name" name="last-name" placeholder="Last name" onChange={value.handleLastNameInputChange} required />
                                            <input type="email" id="email" name="email" placeholder="Email address" onChange={value.handleEmailInputChange} required />
                                            <input type="password" id="password" name="password" placeholder="Password" onChange={value.handlePasswordInputChange} required />
                                            <input type="submit" id="submit" name="submit" placeholder="Submit" />
                                        </form>
                                        <Link to="/login">Existing user?</Link>
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

export default AccountSignUp;