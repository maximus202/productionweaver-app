import React, { Component } from 'react';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';

class AddScenePage extends Component {
    render() {
        const { productionId } = this.props.match.params
        return (
            <Context.Consumer>
                {(value) => {
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
                                    <form onSubmit={(e) => value.handleSubmitNewScene(e, productionId, this.props.history)}>
                                        <label htmlFor="scene_script_number">Script Scene Number</label>
                                        <input type="text" id="scene_script_number" name="scene_script_number" placeholder="Scene number on script" onChange={value.handleNewSceneSceneScriptNumberInput} required />
                                        <label htmlFor="setting">Setting</label>
                                        <select id="setting" name="setting" onChange={value.handleNewSceneSettingInput} required>
                                            <option value="">--Please choose an option--</option>
                                            <option value="Int.">INT.</option>
                                            <option value="Ext.">EXT.</option>
                                        </select>
                                        <label htmlFor="location">Location</label>
                                        <input type="text" id="location" name="location" placeholder="Example: SMITH HOUSE, LIVING ROOM" onChange={value.handleNewSceneLocationInput} required />
                                        <label htmlFor="time_of_day">Time of day</label>
                                        <select id="time_of_day" name="time_of_day" onChange={value.handleNewSceneTimeOfDayInput} required>
                                            <option value="">--Please choose an option--</option>
                                            <option value="Day">DAY</option>
                                            <option value="Dusk">DUSK</option>
                                            <option value="Night">NIGHT</option>
                                            <option value="Dawn">DAWN</option>
                                        </select>
                                        <label htmlFor="short_summary">Short summary</label>
                                        <input type="text" id="short_summary" name="short_summary" placeholder="Opening scene where protagonist is introduced." onChange={value.handleNewSceneShortSummaryInput} required></input>
                                        <input type="submit" id="submit" name="add-project" placeholder="Add project" />
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

export default AddScenePage;