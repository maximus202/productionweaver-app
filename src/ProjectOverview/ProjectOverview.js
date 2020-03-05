import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import ProjectOverviewContent from '../ProjectOverviewContent/ProjectOverviewContent';

class ProjectOverview extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <>
                <NavBar />
                <ProjectOverviewContent project={this.props.match.params} />
                <Footer />
            </>
        )
    }
}

export default ProjectOverview;