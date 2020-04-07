import React, { Component } from 'react';
import { Context } from '../../Context/Context';
import ProductionApiService from '../../services/production-api-service';

class AddSceneForm extends Component {
    static contextType = Context

    constructor(props) {
        super(props)
        this.state = {
            newSceneScriptNumber: '',
            newSceneSetting: '',
            newSceneLocation: '',
            newSceneTimeOfDay: '',
            newSceneShortSummary: '',
            handleNewSceneSceneScriptNumberInput: this.handleNewSceneSceneScriptNumberInput,
            handleNewSceneSettingInput: this.handleNewSceneSettingInput,
            handleNewSceneLocationInput: this.handleNewSceneLocationInput,
            handleNewSceneTimeOfDayInput: this.handleNewSceneTimeOfDayInput,
            handleNewSceneShortSummaryInput: this.handleNewSceneShortSummaryInput,
            handleSubmitNewScene: this.handleSubmitNewScene,
        }
    }

    handleNewSceneSceneScriptNumberInput = (event) => {
        this.setState({
            newSceneScriptNumber: event.target.value
        })
    }

    handleNewSceneSettingInput = (event) => {
        this.setState({
            newSceneSetting: event.target.value
        })
    }

    handleNewSceneLocationInput = (event) => {
        this.setState({
            newSceneLocation: event.target.value
        })
    }

    handleNewSceneTimeOfDayInput = (event) => {
        this.setState({
            newSceneTimeOfDay: event.target.value
        })
    }

    handleNewSceneShortSummaryInput = (event) => {
        this.setState({
            newSceneShortSummary: event.target.value
        })
    }

    handleSubmitNewScene = (e, productionId) => {
        e.preventDefault();
        const data = {
            'scene_script_number': this.state.newSceneScriptNumber,
            'setting': this.state.newSceneSetting,
            'location': this.state.newSceneLocation,
            'time_of_day': this.state.newSceneTimeOfDay,
            'short_summary': this.state.newSceneShortSummary
        };
        ProductionApiService.submitNewScene(data, productionId)
            .then(responseJson => {
                this.setState({
                    scenes: [...this.context.scenesList, responseJson]
                })
            })
            .then(() => this.props.history.push(`/script-breakdown/${productionId}`))
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <form onSubmit={(e) => this.state.handleSubmitNewScene(e, this.props.productionId, this.props.history)}>
                <label htmlFor="scene_script_number">Script Scene Number</label>
                <input type="text" id="scene_script_number" name="scene_script_number" placeholder="Scene number on script" onChange={this.state.handleNewSceneSceneScriptNumberInput} required />
                <label htmlFor="setting">Setting</label>
                <select id="setting" name="setting" onChange={this.state.handleNewSceneSettingInput} required>
                    <option value="">--Please choose an option--</option>
                    <option value="Int.">INT.</option>
                    <option value="Ext.">EXT.</option>
                </select>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" placeholder="Example: SMITH HOUSE, LIVING ROOM" onChange={this.state.handleNewSceneLocationInput} required />
                <label htmlFor="time_of_day">Time of day</label>
                <select id="time_of_day" name="time_of_day" onChange={this.state.handleNewSceneTimeOfDayInput} required>
                    <option value="">--Please choose an option--</option>
                    <option value="Day">DAY</option>
                    <option value="Dusk">DUSK</option>
                    <option value="Night">NIGHT</option>
                    <option value="Dawn">DAWN</option>
                </select>
                <label htmlFor="short_summary">Short summary</label>
                <input type="text" id="short_summary" name="short_summary" placeholder="Opening scene where protagonist is introduced." onChange={this.state.handleNewSceneShortSummaryInput} required></input>
                <input type="submit" id="submit" name="add-project" placeholder="Add project" />
            </form>
        )
    }
}

export default AddSceneForm;