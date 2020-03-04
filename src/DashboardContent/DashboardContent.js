import React, { Component } from 'react';
import ProjectsList from '../ProjectsList/ProjectsList';

class DashboardContent extends Component {
    render() {
        return (
            <main>
                <header>
                    <h1>Good afternoon, (name)</h1>
                </header>
                <section class="module-header">
                    <h2>Projects</h2>
                    <button>Add project</button>
                </section>
                <section>
                    <ProjectsList />
                </section>
            </main>
        )
    }
}

export default DashboardContent;