import React, { Component } from 'react';
import { Context } from '../Context/Context';

class AddSceneForm extends Component {
    render() {
        return (
            <Context.Consumer>
                {(value) => {
                    return (
                        <main>
                            <header>
                                <h1>Project name</h1>
                                <h2>Add a new scene</h2>
                            </header>
                            <form onSubmit={(e) => value.handleSubmitNewScene(e, this.props.history)}>
                                <label htmlFor="setting">Setting</label>
                                <select id="setting" name="setting" onChange={value.handleNewSceneSettingInput} required>
                                    <option value="">--Please choose an option--</option>
                                    <option value="INT.">INT.</option>
                                    <option value="EXT.">EXT.</option>
                                </select>
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" name="location" placeholder="Example: SMITH HOUSE, LIVING ROOM" onChange={value.handleNewSceneLocationInput} required />
                                <label htmlFor="time_of_day">Time of day</label>
                                <select id="time_of_day" name="time_of_day" onChange={value.handleNewSceneTimeOfDayInput} required>
                                    <option value="">--Please choose an option--</option>
                                    <option value="DAY">DAY</option>
                                    <option value="DUSK">DUSK</option>
                                    <option value="NIGHT">NIGHT</option>
                                    <option value="DAWN">DAWN</option>
                                </select>
                                <label htmlFor="short_summary">Short summary</label>
                                <input type="text" id="short_summary" name="short_summary" placeholder="Opening scene where protagonist is introduced." onChange={value.handleNewSceneShortSummaryInput} required></input>
                                <input type="submit" id="add-project" name="add-project" placeholder="Add project" />
                            </form>
                        </main>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default AddSceneForm;