import React, { Component } from 'react';

class AddProjectForm extends Component {
    render() {
        return (
            <main>
                <header>
                    <h1>Add a new project</h1>
                </header>
                <form>
                    <input type="text" id="project-name" name="project-name" placeholder="Project name" required />
                    <input type="submit" id="add-project" name="add-project" placeholder="Add project" />
                </form>
            </main>
        )
    }
}

export default AddProjectForm;