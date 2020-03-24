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
                            <form>
                                <label for="setting">Setting</label>
                                <select id="setting" name="setting">
                                    <option value="INT.">INT.</option>
                                    <option value="EXT.">EXT.</option>
                                </select>
                                <label for="location">Location</label>
                                <input type="text" id="location" name="location" placeholder="Example: SMITH HOUSE, LIVING ROOM" required />
                                <label for="time_of_day">Time of day</label>
                                <select id="time_of_day" name="time_of_day">
                                    <option value="DAY">DAY</option>
                                    <option value="DUSK">DUSK/SUNSET</option>
                                    <option value="NIGHT">NIGHT</option>
                                    <option value="DAWN">DAWN/SUNRISE</option>
                                </select>
                                <label for="short_summary">Short summary</label>
                                <input type="text" id="short_summary" name="short_summary" placeholder="Opening scene where protagonist is introduced."></input>
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