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
                                <section>
                                    <h1>Add a new production</h1>
                                </section>
                            </header>
                            <main>
                                <section>
                                    <form onSubmit={(e) => value.handleSubmitNewProduction(e, this.props.history)}>
                                        <label htmlFor="project-name">Production name</label>
                                        <input type="text" id="project-name" name="project-name" placeholder="Night of the Living Dead" onChange={value.handleNewProductionTitle} required />
                                        <input type="submit" id="submit" name="add-project" />
                                    </form>
                                </section>
                            </main>
                        </>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default AddProduction;