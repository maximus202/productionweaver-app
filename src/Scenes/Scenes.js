import React, { Component } from 'react';
import ScenesList from '../ScenesList/ScenesList';
import PROJECTS from '../projects';

class Scenes extends Component {
    render() {
        const project = PROJECTS.find(project =>
            project.id === this.props.project.projectId
        )
        return (
            < main >
                <header>
                    <h1>{project.projectName}</h1>
                    <p className="header-subtitle">Script breakdown</p>
                </header>
                <section className="module-header">
                    <h2>Scenes</h2>
                    <button>Add scene</button>
                </section>
                <section>
                    <ScenesList project={project} />
                </section>
            </main>
        )
    }
}

export default Scenes;