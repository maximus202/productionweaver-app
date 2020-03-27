import React, { Component } from 'react';
import AddProductionForm from '../../components/AddProductionForm/AddProductionForm';

class AddProduction extends Component {
    render() {
        return (
            <>
                <AddProductionForm history={this.props.history} />
            </>
        )
    }
}

export default AddProduction;