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
            <section key={scene.id}>
                <Link key={scene.id} to={`/scene-breakdown/${scene.id}`}>
                    {scene.scene_script_number}: {scene.setting} {scene.location} - {scene.time_of_day}
                </Link>
            </section >
        )
    }

    render() {
        const { error, production } = this.context
        let content
        if (error) {
            content = (error.error === 'production does not exist')
                ? <section><p>Production not found</p></section>
                : <section><p>No scenes.</p></section>
        } else if (!production.id) {
            content = <div>Loading...</div>
        } else {
            content = this.renderScenes()
        }
        return (
            <>
                <NavBar />
                <header>
                    <section>
                        <h1>{production.production_title}</h1>
                        <p>Script Breakdown</p>
                    </section>
                </header>
                <main>
                    <section className="module-header">
                        <h2>Scenes</h2>
                        <Link to={`/add-scene/${production.id}`}>Add scene</Link>
                    </section>
                    {content}
                </main>
            </>
        )
    }
}

export default ScriptBreakdownPage;