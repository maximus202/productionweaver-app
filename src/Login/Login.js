import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import LoginForm from '../LoginForm/LoginForm';

class Login extends Component {
    render() {
        return (
            <>
                <NavBar />
                <LoginForm />
                <Footer />
            </>
        )
    }
}

export default Login;