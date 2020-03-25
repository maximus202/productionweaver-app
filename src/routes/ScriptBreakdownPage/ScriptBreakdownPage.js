import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer.js';
import Scenes from '../../Scenes/Scenes.js';
import { Context } from '../../Context/Context';
import ProductionApiService from '../../services/production-api-service';
import SceneListItem from '../../components/SceneListItem/SceneListItem';
import { Link } from 'react-router-dom';


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
        this.context.clearProduction()
        this.context.clearScenesList()
    }

    renderScenes() {
        const { scenesList = [] } = this.context
        return scenesList.map(scene =>
            < SceneListItem
                key={scene.id}
                scene={scene}
            />
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
                <header>
                    <h1>{production.production_title}</h1>
                    <p>Script Breakdown</p>
                </header>
                <section className="module-header">
                    <h2>Scenes</h2>
                    <Link to={`/add-scene/`}>Add scene</Link>
                </section>
                <section>
                    {content}
                </section>
                <Footer />
            </>
        )
    }
}

export default ScriptBreakdownPage;