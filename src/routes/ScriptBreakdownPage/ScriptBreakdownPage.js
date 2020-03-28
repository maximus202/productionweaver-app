import React, { Component } from 'react';
import { Context } from '../../Context/Context';
import ProductionApiService from '../../services/production-api-service';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

class ScriptBreakdownPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = Context

    componentDidMount() {
        const { productionId } = this.props.match.params
        this.context.clearError()
        ProductionApiService.getProduction(productionId)
            .then(this.context.setProduction)
            .catch(this.context.setError)
        ProductionApiService.getScenes(productionId)
            .then(this.context.setScenesList)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        //this.context.clearProduction()
        //this.context.clearScenesList()
    }

    renderScenes() {
        const { scenesList = [] } = this.context
        return scenesList.map(scene =>
            <Link key={scene.id} to={`/scene-breakdown/${scene.id}`}>
                <section key={scene.id}>
                    <h1>{scene.scene_script_number}: {scene.setting} {scene.location} - {scene.time_of_day}</h1>
                </section>
            </Link>
        )
    }

    render() {
        const { error, production } = this.context
        let content
        if (error) {
            content = (error.error === 'production does not exist')
                ? <p>Production not found</p>
                : <p>There was an error</p>
        } else if (!production.id) {
            content = <div>Loading...</div>
        } else {
            content = this.renderScenes()
        }
        return (
            <>
                <NavBar />
                <header>
                    <h1>{production.production_title}</h1>
                    <p>Script Breakdown</p>
                </header>
                <main>
                    <section className="module-header">
                        <h2>Scenes</h2>
                        <Link to={`/add-scene/${production.id}`}>Add scene</Link>
                    </section>
                    <section>
                        {content}
                    </section>
                </main>
            </>
        )
    }
}

export default ScriptBreakdownPage;