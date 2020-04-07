import React, { Component } from 'react';
import ProductionApiService from '../../services/production-api-service';

class AccountSignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            handleFirstNameInputChange: this.handleFirstNameInputChange,
            handleLastNameInputChange: this.handleLastNameInputChange,
            handleEmailInputChange: this.handleEmailInputChange,
            handlePasswordInputChange: this.handlePasswordInputChange,
            handleSubmitNewUser: this.handleSubmitNewUser,
        }
    }

    handleFirstNameInputChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameInputChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmailInputChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordInputChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmitNewUser = (e) => {
        e.preventDefault();
        const data = {
            'first_name': this.state.firstName,
            'last_name': this.state.lastName,
            'email': this.state.email,
            'password': this.state.password,
        };
        ProductionApiService.submitNewUser(data)
            .then(() => this.props.history.push('/registrationsuccess'))
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <form onSubmit={(e) => this.state.handleSubmitNewUser(e, this.props.history)}>
                <label htmlFor="first-name">First name</label>
                <input type="text" id="first-name" name="first-name" onChange={this.state.handleFirstNameInputChange} required />
                <label htmlFor="last-name">Last name</label>
                <input type="text" id="last-name" name="last-name" onChange={this.state.handleLastNameInputChange} required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={this.state.handleEmailInputChange} required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={this.state.handlePasswordInputChange} required />
                <input type="submit" id="submit" name="submit" placeholder="Submit" />
            </form>
        )
    }
}

export default AccountSignUpForm;