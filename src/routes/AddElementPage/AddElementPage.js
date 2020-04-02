import React, { Component } from 'react';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';

class AddElementPage extends Component {
    render() {
        const { sceneId } = this.props.match.params
        return (
            <Context.Consumer>
                {(value) => {
                    return (
                        <>
                            <NavBar />
                            <header>
                                <section>
                                    <h1>Add new Element</h1>
                                </section>
                            </header>
                            <main>
                                <section>
                                    <form onSubmit={(e) => value.handleSubmitNewElement(e, sceneId, this.props.history)}>
                                        <label htmlFor="category">Category</label>
                                        <select id="category" name="category" onChange={value.handleNewElementCategoryInput} required>
                                            <option value="">--Please choose an option--</option>
                                            <option value="Animal Handler">Animal Handler</option>
                                            <option value="Cast">Cast</option>
                                            <option value="Extras">Extras</option>
                                            <option value="Greenery">Greenery</option>
                                            <option value="Livestock">Livestock</option>
                                            <option value="Makeup/Hair">Makeup/Hair</option>
                                            <option value="Mechanical FX">Mechanical FX</option>
                                            <option value="Miscellaneous">Miscellaneous</option>
                                            <option value="Music">Music</option>
                                            <option value="Optical FX">Optical FX</option>
                                            <option value="Prop">Prop</option>
                                            <option value="Security">Security</option>
                                            <option value="Set Dressing">Set Dressing</option>
                                            <option value="Sound">Sound</option>
                                            <option value="Special Equipment">Special Equipment</option>
                                            <option value="Special FX">Special FX</option>
                                            <option value="Stunts">Stunts</option>
                                            <option value="Vehicles">Vehicles</option>
                                            <option value="Visual FX">Visual FX</option>
                                        </select>
                                        <input type="text" id="description" name="description" placeholder="Element description (example: gun)" onChange={value.handleNewElementDescriptionInput} required />
                                        <input type="submit" id="submit" name="add-element" placeholder="Add element" />
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

export default AddElementPage;