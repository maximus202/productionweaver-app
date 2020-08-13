/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../Context/Context';
import ProductionApiService from '../../services/production-api-service';

class AddSceneForm extends Component {
    static contextType = Context

    constructor(props) {
      super(props);
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
      };
    }

    handleNewSceneSceneScriptNumberInput = (event) => {
      this.setState({
        newSceneScriptNumber: event.target.value,
      });
    }

    handleNewSceneSettingInput = (event) => {
      this.setState({
        newSceneSetting: event.target.value,
      });
    }

    handleNewSceneLocationInput = (event) => {
      this.setState({
        newSceneLocation: event.target.value,
      });
    }

    handleNewSceneTimeOfDayInput = (event) => {
      this.setState({
        newSceneTimeOfDay: event.target.value,
      });
    }

    handleNewSceneShortSummaryInput = (event) => {
      this.setState({
        newSceneShortSummary: event.target.value,
      });
    }

    handleSubmitNewScene = (e, productionId) => {
      e.preventDefault();
      const {
        newSceneScriptNumber,
        newSceneSetting,
        newSceneLocation,
        newSceneTimeOfDay,
        newSceneShortSummary,
      } = this.state;
      const { history } = this.props;
      const data = {
        scene_script_number: newSceneScriptNumber,
        setting: newSceneSetting,
        location: newSceneLocation,
        time_of_day: newSceneTimeOfDay,
        short_summary: newSceneShortSummary,
      };
      ProductionApiService.submitNewScene(data, productionId)
        .then((responseJson) => {
          const { scenesList } = this.context;
          this.setState({
            scenes: [...scenesList, responseJson],
          });
        })
        .then(() => history.push(`/script-breakdown/${productionId}`))
        .catch((error) => {
          console.error({ error });
        });
    }

    render() {
      const {
        productionId,
        history,
      } = this.props;
      const {
        handleSubmitNewScene,
        handleNewSceneSceneScriptNumberInput,
        handleNewSceneSettingInput,
        handleNewSceneLocationInput,
        handleNewSceneTimeOfDayInput,
        handleNewSceneShortSummaryInput,
      } = this.state;
      return (
        <form onSubmit={(e) => handleSubmitNewScene(e, productionId, history)}>
          <label htmlFor="scene_script_number">Script Scene Number</label>
          <input type="text" id="scene_script_number" name="scene_script_number" placeholder="Scene number on script" onChange={handleNewSceneSceneScriptNumberInput} required />
          <label htmlFor="setting">Setting</label>
          <select id="setting" name="setting" onChange={handleNewSceneSettingInput} required>
            <option value="">--Select an environment (INT/EXT)--</option>
            <option value="Int.">INT.</option>
            <option value="Ext.">EXT.</option>
          </select>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" placeholder="Location (Example: SMITH HOUSE, LIVING ROOM)" onChange={handleNewSceneLocationInput} required />
          <label htmlFor="time_of_day">Time of day</label>
          <select id="time_of_day" name="time_of_day" onChange={handleNewSceneTimeOfDayInput} required>
            <option value="">--Select a time of day--</option>
            <option value="Day">DAY</option>
            <option value="Dusk">DUSK</option>
            <option value="Night">NIGHT</option>
            <option value="Dawn">DAWN</option>
          </select>
          <label htmlFor="short_summary">Short summary</label>
          <input type="text" id="short_summary" name="short_summary" placeholder="Short summary (Example: Opening scene where protagonist is introduced.)" onChange={handleNewSceneShortSummaryInput} required />
          <input className="button" type="submit" id="submit" name="add-project" placeholder="Add project" />
        </form>
      );
    }
}

AddSceneForm.propTypes = {
  history: PropTypes.object.isRequired,
  productionId: PropTypes.string.isRequired,
};

export default AddSceneForm;
