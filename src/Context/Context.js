import React from 'react';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import ProductionApiService from '../services/production-api-service';

export const Context = React.createContext()

export class Provider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            loading: false,
            productionList: [],
            production: [],
            scenesList: [],
            scene: [],
            elementsList: [],
            loginEmail: '',
            loginPassword: '',
            handleSubmitLoginEmail: this.handleSubmitLoginEmail,
            handleSubmitLoginPassword: this.handleSubmitLoginPassword,
            handleSubmitJwtAuth: this.handleSubmitJwtAuth,
            handleGetProductions: this.handleGetProductions,
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
            error: ''
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

    handleSubmitJwtAuth = (e, history) => {
        e.preventDefault();
        this.setState({ loading: true })
        const data = {
            'email': this.state.loginEmail,
            'password': this.state.loginPassword
        }
        AuthApiService.postLogin(data)
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
            })
            .then(() => this.setState({
                loading: false
            }))
            .then(() => history.push('/'))
            .catch(res => {
                this.setState({
                    error: res.error
                })
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