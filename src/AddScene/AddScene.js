import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import AddSceneForm from '../AddSceneForm/AddSceneForm';

class AddScene extends Component {
    render() {
        return (
            <>
                <NavBar />
                <AddSceneForm />
                <Footer />
            </>
        )
    }
}

export default AddScene;