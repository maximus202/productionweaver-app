import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SceneListItem extends Component {
    render() {
        const { scene } = this.props
        return (
            <section className="scene-item" key={scene.id}>
                <Link to={`/scene-breakdown/${scene.production_id}/${scene.id}`}>
                    <p className="scene-number">Scene {scene.id}</p>
                    <div className="scene-and-short-summary">
                        <h3>{scene.setting} {scene.location} - {scene.time_of_day}</h3>
                        <p>{scene.short_summary}</p>
                    </div>
                </Link>
            </section>
        )
    }

}

export default SceneListItem;