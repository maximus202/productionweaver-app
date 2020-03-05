import React, { Component } from 'react';
import './ProjectsList.css';
import PROJECTS from '../projects';

export default function ProjectsList() {
    return (
        <>
            {PROJECTS.map(project =>
                <section className="project-item" key={project.id}>
                    <img src="project-icon.png" alt="Project" className="project-icon" />
                    <h3>{project.projectName}</h3>
                </section>
            )}
        </>
    )
}