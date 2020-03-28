import React, { Component } from 'react';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';

class AddProduction extends Component {
    render() {
        return (
            <Context.Consumer>
                {(value) => {
                    return (
                        <>
                            <NavBar />
                            <header>
                                <h1>Add a new production</h1>
                            </header>
                            <main>
                                <form onSubmit={(e) => value.handleSubmitNewProduction(e, this.props.history)}>
                                    <input type="text" id="project-name" name="project-name" placeholder="Project name" onChange={value.handleNewProductionTitle} required />
                                    <input type="submit" id="add-project" name="add-project" placeholder="Add project" />
                                </form>
                            </main>
                        </>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default AddProduction;