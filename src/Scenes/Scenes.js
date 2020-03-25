import React, { Component } from 'react';
import PROJECTS from '../projects';
import { API_BASE_URL } from '../config';
import TokenService from '../services/token-service';
import { Context } from '../Context/Context';
import { Link } from 'react-router-dom';

class Scenes extends Component {
    static contextType = Context;

    componentDidMount() {
        fetch(`${API_BASE_URL}/api/scenes${this.props.history.location.pathname}`, {
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
                this.context.handleGetDisplayedScenes(responseJson)
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
                                {console.log(value.displayedProductions)}
                                <h1>Script breakdown</h1>
                            </header>
                            <section className="module-header">
                                <Link to={`/add-scene/`}>Add scene</Link>
                            </section>
                            <section>
                                {value.displayedScenes.map(scene =>
                                    <section className="scene-item" key={scene.id}>
                                        <Link to={`/scene-breakdown/${scene.production_id}/${scene.id}`}>
                                            <p className="scene-number">Scene {scene.id}</p>
                                            <div className="scene-and-short-summary">
                                                <h3>{scene.setting} {scene.location} - {scene.time_of_day}</h3>
                                                <p>{scene.short_summary}</p>
                                            </div>
                                        </Link>
                                    </section>
                                )}
                            </section>
                        </main>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default Scenes;