import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import AccountSignUpForm from '../AccountSignUpForm/AccountSignUpForm';
import Footer from '../Footer/Footer';

class AccountSignUp extends Component {
    render() {
        return (
            <>
                <NavBar />
                <AccountSignUpForm />
                <Footer />
            </>
        )
    }
}

export default AccountSignUp;