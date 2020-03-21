import React from 'react';
import { render } from '@testing-library/react';

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
            handleFirstNameInputChange: this.handleFirstNameInputChange,
            handleLastNameInputChange: this.handleLastNameInputChange,
            handleEmailInputChange: this.handleEmailInputChange,
            handlePasswordInputChange: this.handlePasswordInputChange,
            handleSubmitNewUser: this.handleSubmitNewUser
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
            .then(() => history.push('/login'))
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