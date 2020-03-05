import React, { Component } from 'react';
import './ProjectOverviewContent.css';
import ProductionTools from '../ProductionTools/ProductionTools';
import PROJECTS from '../projects';

class ProjectOverviewContent extends Component {
    render() {
        const project = PROJECTS.find(project =>
            project.id === this.props.project.projectId
        )
        return (
            < main >
                <header>
                    <h1>{project.projectName}</h1>
                    <p className="header-subtitle">Project overview</p>
                </header>
                <section className="module-header">
                    <h2>Production Tools</h2>
                </section>
                <section>
                    <ProductionTools project={this.props.project} />
                </section>
            </main >
        )
    }
}

export default ProjectOverviewContent;