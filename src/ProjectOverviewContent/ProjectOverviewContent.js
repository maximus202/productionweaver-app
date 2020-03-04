import React, { Component } from 'react';
import './ProjectOverviewContent.css';
import ProductionTools from '../ProductionTools/ProductionTools';

class ProjectOverviewContent extends Component {
    render() {
        return (
            <main>
                <header>
                    <h1>Night of the Living Dead</h1>
                    <p className="header-subtitle">Project overview</p>
                </header>
                <section className="module-header">
                    <h2>Production Tools</h2>
                </section>
                <section>
                    <ProductionTools />
                </section>
            </main>
        )
    }
}

export default ProjectOverviewContent;