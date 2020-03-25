import React, { Component } from 'react';
import PROJECTS from '../projects';
import { API_BASE_URL } from '../config';
import TokenService from '../services/token-service';
import { Context } from '../Context/Context';
import { Link } from 'react-router-dom';

class Scenes extends Component {
    static contextType = Context;
    componentDidMount() {
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
                this.context.handleGetScenes(responseJson)
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
                            {console.log(value.scenes)}
                            {console.log(value.displayedProduction)}
                            <header>
                                <h1>project.projectName</h1>
                                <p className="header-subtitle">Script breakdown</p>
                            </header>
                            <section className="module-header">
                                <h2>Scenes</h2>
                                <Link to={`/add-scene/${value.displayedProduction.id}`}>Add scene</Link>
                            </section>
                            <section>
                                {value.scenes.map(scene =>
                                    <section className="scene-item" key={scene.id}>
                                        <Link to={`/script-breakdown/${scene.production_id}/scene-breakdown/${scene.id}`}>
                                            <p className="scene-number">{scene.id}</p>
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