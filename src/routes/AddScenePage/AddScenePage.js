import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AddSceneForm from '../../components/AddSceneForm/AddSceneForm';

class AddScenePage extends Component {
    render() {
        return (
            <>
                <NavBar />
                <header>
                    <section>
                        <h1>Add a new scene</h1>
                    </section>
                </header>
                <main>
                    <section>
                        <AddSceneForm history={this.props.history} productionId={this.props.match.params.productionId} />
                    </section>
                </main>
            </>
        )
    }
}

export default AddScenePage;