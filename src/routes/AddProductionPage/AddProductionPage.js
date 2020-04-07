import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AddProductionForm from '../../components/AddProductionForm/AddProductionForm';

class AddProduction extends Component {
    render() {
        return (
            <>
                <NavBar />
                <header>
                    <section>
                        <h1>Add a new production</h1>
                    </section>
                </header>
                <main>
                    <section>
                        <AddProductionForm history={this.props.history} />
                    </section>
                </main>
            </>
        )
    }
}

export default AddProduction;