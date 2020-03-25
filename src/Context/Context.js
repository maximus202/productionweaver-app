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
            error: null,
            productionList: [],
            scenesList: [],
            production: [],
            productions: [],
            displayedProduction: [],
            displayedScenes: [],
            displayedElements: [],
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            loginEmail: '',
            loginPassword: '',
            newProductionTitle: '',
            newSceneSetting: '',
            newSceneLocation: '',
            newSceneTimeOfDay: '',
            newSceneShortSummary: '',
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
            handleGetDisplayedProduction: this.handleGetDisplayedProduction,
            handleGetDisplayedScenes: this.handleGetDisplayedScenes,
            handleGetDisplayedElements: this.handleGetDisplayedElements,
            handleNewSceneSettingInput: this.handleNewSceneSettingInput,
            handleNewSceneLocationInput: this.handleNewSceneLocationInput,
            handleNewSceneTimeOfDayInput: this.handleNewSceneTimeOfDayInput,
            handleNewSceneShortSummaryInput: this.handleNewSceneShortSummaryInput,
            handleSubmitNewScene: this.handleSubmitNewScene,
            setProductionList: this.setProductionList,
            setError: this.setError,
            clearError: this.clearError,
            setProduction: this.setProduction,
            setScenesList: this.setScenesList,

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

    handleNewProductionTitle = (event) => {
        this.setState({
            newProductionTitle: event.target.value
        })
    }

    handleNewSceneSettingInput = (event) => {
        this.setState({
            newSceneSetting: event.target.value
        })
    }

    handleNewSceneLocationInput = (event) => {
        this.setState({
            newSceneLocation: event.target.value
        })
    }

    handleNewSceneTimeOfDayInput = (event) => {
        this.setState({
            newSceneTimeOfDay: event.target.value
        })
    }

    handleNewSceneShortSummaryInput = (event) => {
        this.setState({
            newSceneShortSummary: event.target.value
        })
    }

    handleGetProductions = (productions) => {
        this.setState({
            productions: productions
        })
    }

    handleGetDisplayedProduction = (production) => {
        this.setState({
            displayedProduction: production
        })
    }

    handleGetDisplayedScenes = (scenes) => {
        this.setState({
            displayedScenes: scenes
        })
    }

    handleGetDisplayedElements = (elements) => {
        this.setState({
            displayedElements: elements
        })
    }

    //Dashboard route handlers
    setProductionList = productionList => {
        this.setState({
            productionList
        })
    }

    setError = (error) => {
        console.error(error)
        this.setState({
            error
        })
    }

    clearError = () => {
        this.setState({
            error: null
        })
    }

    //Production route handlers
    setProduction = (production) => {
        this.setState({ production })
    }

    clearProduction = () => {
        this.setProduction(null)
    }

    //Script breakdown route handlers
    setScenesList = (scenesList) => {
        this.setState({
            scenesList
        })
    }

    clearScenesList = () => {
        this.setScenesList(null)
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
            .then(() => history.push('/'))
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
            .then(() => history.push('/'))
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

    handleSubmitNewScene = (e, history) => {
        console.log(history.location.pathname)
        e.preventDefault();
        const settingInput = this.state.newSceneSetting;
        const locationInput = this.state.newSceneLocation;
        const timeOfDayInput = this.state.newSceneTimeOfDay;
        const shortSummaryInput = this.state.newSceneShortSummary;
        const url = `${API_BASE_URL}/api/scenes${history.location.pathname}`;
        const data = {
            'setting': settingInput,
            'location': locationInput,
            'time_of_day': timeOfDayInput,
            'short_summary': shortSummaryInput
        };
        const otherParams = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(data),
            method: 'POST',
        }

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
                    scenes: [...this.state.users, responseJson]
                })
            })
            .then(() => history.goBack())
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