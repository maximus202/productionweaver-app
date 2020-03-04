import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import AddProjectForm from '../AddProjectForm/AddProjectForm';

class AddProject extends Component {
    render() {
        return (
            <>
                <NavBar />
                <AddProjectForm />
                <Footer />
            </>
        )
    }
}

export default AddProject;