import React from 'react';
import { API_BASE_URL } from '../config';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

export const Context = React.createContext()

export class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            loginEmail: '',
            loginPassword: '',
            handleFirstNameInputChange: this.handleFirstNameInputChange,
            handleLastNameInputChange: this.handleLastNameInputChange,
            handleEmailInputChange: this.handleEmailInputChange,
            handlePasswordInputChange: this.handlePasswordInputChange,
            handleSubmitNewUser: this.handleSubmitNewUser,
            handleSubmitLoginEmail: this.handleSubmitLoginEmail,
            handleSubmitLoginPassword: this.handleSubmitLoginPassword,
            handleSubmitJwtAuth: this.handleSubmitJwtAuth
        }
    }

    //handlers
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

    handleSubmitLoginEmail = (event) => {
        this.setState({
            loginEmail: event.target.value
        })
    }

    handleSubmitLoginPassword = (event) => {
        this.setState({
            loginPassword: event.target.value
        })
    }

    handleSubmitJwtAuth = (e) => {
        e.preventDefault();
        const loginEmailInput = this.state.loginEmail;
        const loginPasswordInput = this.state.loginPassword;
        const data = {
            'email': loginEmailInput,
            'password': loginPasswordInput
        }
        AuthApiService.postLogin(data)
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
            })
    }

    handleSubmitNewUser = (e, history) => {
        e.preventDefault();
        const firstNameInput = this.state.firstName;
        const lastNameInput = this.state.lastName;
        const emailInput = this.state.email;
        const passwordInput = this.state.password;
        const url = `${API_BASE_URL}/api/users/`;
        const data = {
            'first_name': firstNameInput,
            'last_name': lastNameInput,
            'email': emailInput,
            'password': passwordInput
        };
        const otherParams = {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
            method: 'POST',
        };

        fetch(url, otherParams)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response
                        .json()
                        .then(responseJson => Promise.reject(new Error(responseJson)))
                }
            })
            .then(responseJson => {
                this.setState({
                    users: [...this.state.users, responseJson]
                })
            })
            .then(() => history.push('/registrationsuccess'))
            .catch(error => {
                console.error({ error })
            })
    }


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}