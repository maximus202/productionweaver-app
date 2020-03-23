import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import AddProductionForm from '../AddProductionForm/AddProductionForm';

class AddProduction extends Component {
    render() {
        return (
            <>
                <NavBar />
                <AddProductionForm history={this.props.history} />
                <Footer />
            </>
        )
    }
}

export default AddProduction;