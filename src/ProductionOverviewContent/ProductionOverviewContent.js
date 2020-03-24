import React, { Component } from 'react';
import './ProductionOverviewContent.css';
import { Context } from '../Context/Context';
import { API_BASE_URL } from '../config';
import TokenService from '../services/token-service';
import { Link } from 'react-router-dom';

class ProductionOverviewContent extends Component {
    static contextType = Context;

    componentDidMount() {
        console.log(this.props.history.location.pathname)
        fetch(`${API_BASE_URL}/api${this.props.history.location.pathname}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
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
                this.context.handleDisplayedProduction(responseJson)
            })
            .catch(error => {
                console.log({ error })
            })
    }

    render() {
        return (
            <Context.Consumer>
                {(value) => {
                    return (
                        < main >
                            <header>
                                <h1>{value.displayedProduction.production_title}</h1>
                                <p className="header-subtitle">Project overview</p>
                            </header>
                            <section className="module-header">
                                <h2>Production Tools</h2>
                            </section>
                            <section>
                                <h3><Link to={`/script-breakdown/${value.displayedProduction.id}`}>Script breakdown</Link></h3>
                            </section>
                        </main >
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default ProductionOverviewContent;

/*< main >
                            <header>
                                <h1>{value.displayProductions.production_title}</h1>
                                <p className="header-subtitle">Project overview</p>
                            </header>
                            <section className="module-header">
                                <h2>Production Tools</h2>
                            </section>
                            <section>
                                <h3><Link to={`/script-breakdown/${value.displayProductions.id}`}>Script breakdown</Link></h3>
                            </section>
                        </main >*/