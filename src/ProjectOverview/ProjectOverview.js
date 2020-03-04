import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import ProjectOverviewContent from '../ProjectOverviewContent/ProjectOverviewContent';

class ProjectOverview extends Component {
    render() {
        return (
            <>
                <NavBar />
                <ProjectOverviewContent />
                <Footer />
            </>
        )
    }
}

export default ProjectOverview;