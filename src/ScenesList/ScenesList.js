import React, { Component } from 'react';
import './ScenesList.css';
import { Link } from 'react-router-dom';

class ScenesList extends Component {
    render() {
        const scenes = this.props.project.scenes
        return (
            <>
                {scenes.map(scene =>
                    <section className="scene-item" key={scene.sceneNumber}>
                        <Link to={`/script-breakdown/${this.props.project.id}/scene-breakdown/${scene.sceneNumber}`}>
                            <p className="scene-number">{scene.sceneNumber}</p>
                            <div className="scene-and-short-summary">
                                <h3>{scene.setting} {scene.description} - {scene.timeOfDay}</h3>
                                <p>{scene.shortSummary}</p>
                            </div>
                        </Link>
                    </section>
                )}
            </>
        )
    }
}

export default ScenesList;