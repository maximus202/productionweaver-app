import React from 'react';
import { API_BASE_URL } from '../config';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';

export const Context = React.createContext()

export class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            productionList: [],
            scenesList: [],
            production: [],
            productions: [],
            scene: [],
            elementsList: [],
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
            newSceneScriptNumber: '',
            newSceneSetting: '',
            newSceneLocation: '',
            newSceneTimeOfDay: '',
            newSceneShortSummary: '',
            newElementCategory: '',
            newElementDescription: '',
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
            handleNewSceneSceneScriptNumberInput: this.handleNewSceneSceneScriptNumberInput,
            handleNewSceneSettingInput: this.handleNewSceneSettingInput,
            handleNewSceneLocationInput: this.handleNewSceneLocationInput,
            handleNewSceneTimeOfDayInput: this.handleNewSceneTimeOfDayInput,
            handleNewSceneShortSummaryInput: this.handleNewSceneShortSummaryInput,
            handleSubmitNewScene: this.handleSubmitNewScene,
            handleNewElementCategoryInput: this.handleNewElementCategoryInput,
            handleNewElementDescriptionInput: this.handleNewElementDescriptionInput,
            handleSubmitNewElement: this.handleSubmitNewElement,
            setProductionList: this.setProductionList,
            setError: this.setError,
            clearError: this.clearError,
            setProduction: this.setProduction,
            clearProduction: this.clearProduction,
            setScenesList: this.setScenesList,
            clearScenesList: this.clearScenesList,
            setScene: this.setScene,
            clearScene: this.clearScene,
            setElementsList: this.setElementsList,
            clearElementsList: this.clearElementsList
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

    handleNewSceneSceneScriptNumberInput = (event) => {
        this.setState({
            newSceneScriptNumber: event.target.value
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

    //Scene breakdown route handlers
    setScene = (scene) => {
        this.setState({
            scene
        })
    }

    clearScene = () => {
        this.setState(null)
    }

    setElementsList = (elementsList) => {
        this.setState({
            elementsList
        })
    }

    clearElementsList = () => {
        this.setState(null)
    }

    handleNewElementCategoryInput = (event) => {
        this.setState({
            newElementCategory: event.target.value
        })
    }

    handleNewElementDescriptionInput = (event) => {
        this.setState({
            newElementDescription: event.target.value
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

    handleSubmitNewScene = (e, productionId, history) => {
        e.preventDefault();
        const settingInput = this.state.newSceneSetting;
        const sceneSceneScriptNumberInput = this.state.newSceneScriptNumber;
        const locationInput = this.state.newSceneLocation;
        const timeOfDayInput = this.state.newSceneTimeOfDay;
        const shortSummaryInput = this.state.newSceneShortSummary;
        const url = `${API_BASE_URL}/api/scenes/${productionId}`;
        const data = {
            'scene_script_number': sceneSceneScriptNumberInput,
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
                    scenes: [...this.state.scenesList, responseJson]
                })
            })
            .then(() => history.push(`/script-breakdown/${productionId}`))
            .catch(error => {
                console.error({ error })
            })
    }

    handleSubmitNewElement = (e, sceneId, history) => {
        e.preventDefault();
        const categoryInput = this.state.newElementCategory;
        const descriptionInput = this.state.newElementDescription;
        const url = `${API_BASE_URL}/api/elements/scene/${sceneId}`;
        const data = {
            'category': categoryInput,
            'description': descriptionInput
        }
        console.log(data)
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
                    elementsList: [...this.state.elementsList, responseJson]
                })
            })
            .then(() => history.push(`/scene-breakdown/${sceneId}`))
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