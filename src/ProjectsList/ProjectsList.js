import React, { Component } from 'react';
import './ProjectsList.css';

class ProjectsList extends Component {
    render() {
        return (
            <>
                <section className="project-item">
                    <img src="project-icon.png" alt="Project" className="project-icon" />
                    <h3>Charade</h3>
                </section>
                <section className="project-item">
                    <img src="project-icon.png" alt="Project" className="project-icon" />
                    <h3>Night of the Living Dead</h3>
                </section>
                <section className="project-item">
                    <img src="project-icon.png" alt="Project" className="project-icon" />
                    <h3>Blade Runner 2049</h3>
                </section>
            </>
        )
    }
}

export default ProjectsList;