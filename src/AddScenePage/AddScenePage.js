import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AddSceneForm from '../../AddSceneForm/AddSceneForm';

class AddScene extends Component {
    render() {
        return (
            <>
                <NavBar />
                <AddSceneForm history={this.props.history} />
                <Footer />
            </>
        )
    }
}

export default AddScene;