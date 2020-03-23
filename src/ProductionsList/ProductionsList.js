import React, { Component } from 'react';
import './ProductionsList.css';
import PROJECTS from '../projects';
import { Context } from '../Context/Context';
import { API_BASE_URL } from '../config';
import TokenService from '../services/token-service';

class ProductionsList extends Component {
    static contextType = Context;

    componentDidMount() {
        fetch(`${API_BASE_URL}/api/productions/`, {
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
                this.context.handleGetProductions(responseJson)
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
                        <>
                            {
                                value.productions.map(production =>
                                    <section className="project-item" key={production.id}>
                                        <a href={`/project/${production.id}`}>
                                            <img src="project-icon.png" alt="Production" className="project-icon" />
                                            <h3>{production.production_title}</h3>
                                        </a>
                                    </section>
                                )
                            }
                        </>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default ProductionsList;