import React from 'react';
import { API_BASE_URL } from '../config';
import { TOKEN_KEY } from '../config';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

export const Context = React.createContext()

export class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            productions: [],
            displayedProduction: [],
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            loginEmail: '',
            loginPassword: '',
            newProductionTitle: '',
            handleFirstNameInputChange: this.handleFirstNameInputChange,
            handleLastNameInputChange: this.handleLastNameInputChange,
            handleEmailInputChange: this.handleEmailInputChange,
            handlePasswordInputChange: this.handlePasswordInputChange,
            handleSubmitNewUser: this.handleSubmitNewUser,
            handleSubmitLoginEmail: this.handleSubmitLoginEmail,
            handleSubmitLoginPassword: this.handleSubmitLoginPassword,
            handleSubmitJwtAuth: this.handleSubmitJwtAuth,
            handleGetProductions: this.handleGetProductions,
            handleNewProductionTitle: this.handleNewProductionTitle,
            handleSubmitNewProduction: this.handleSubmitNewProduction,
            handleDisplayedProduction: this.handleDisplayedProduction
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

    handleGetProductions = (productions) => {
        this.setState({
            productions: productions
        })
    }

    handleNewProductionTitle = (event) => {
        this.setState({
            newProductionTitle: event.target.value
        })
    }

    handleDisplayedProduction = (production) => {
        this.setState({
            displayedProduction: production
        })
    }

    handleSubmitNewProduction = (e, history) => {
        e.preventDefault();
        const newProductionTitleInput = this.state.newProductionTitle;
        const data = {
            'production_title': newProductionTitleInput
        }

        fetch(`${API_BASE_URL}/api/productions/`, {
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data),
            method: 'POST',
        })
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
                    productions: [...this.state.productions, responseJson]
                })
            })
            .then(() => history.push('/dashboard'))
            .catch(error => {
                console.error({ error })
            })
    }

    handleSubmitJwtAuth = (e, history) => {
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
            .then(() => history.push('/dashboard'))
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