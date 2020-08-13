/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductionApiService from '../../services/production-api-service';
import { Context } from '../../Context/Context';

class NewElementForm extends Component {
    static contextType = Context

    constructor(props) {
      super(props);
      this.state = {
        newElementCategory: '',
        newElementDescription: '',
        handleNewElementCategoryInput: this.handleNewElementCategoryInput,
        handleNewElementDescriptionInput: this.handleNewElementDescriptionInput,
        handleSubmitNewElement: this.handleSubmitNewElement,
      };
    }

    handleNewElementCategoryInput = (event) => {
      this.setState({
        newElementCategory: event.target.value,
      });
    }

    handleNewElementDescriptionInput = (event) => {
      this.setState({
        newElementDescription: event.target.value,
      });
    }

    handleSubmitNewElement = (e, sceneId) => {
      e.preventDefault();
      const {
        newElementCategory,
        newElementDescription,
      } = this.state;
      const { elementsList } = this.context;
      const { history } = this.props;
      const data = {
        category: newElementCategory,
        description: newElementDescription,
      };
      ProductionApiService.submitNewElement(data, sceneId)
        .then((responseJson) => {
          this.setState({
            elementsList: [...elementsList, responseJson],
          });
        })
        .then(() => history.push(`/scene-breakdown/${sceneId}`))
        .catch((error) => {
          console.error({ error });
        });
    }

    render() {
      const {
        handleSubmitNewElement,
        handleNewElementCategoryInput,
        handleNewElementDescriptionInput,
      } = this.state;
      const { sceneId, history } = this.props;
      return (
        <form onSubmit={(e) => handleSubmitNewElement(e, sceneId, history)}>
          <label htmlFor="category">Category</label>
          <select id="category" name="category" onChange={handleNewElementCategoryInput} required>
            <option value="">--Select a category--</option>
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
            <option value="Props">Props</option>
            <option value="Security">Security</option>
            <option value="Set Dressing">Set Dressing</option>
            <option value="Sound">Sound</option>
            <option value="Special Equipment">Special Equipment</option>
            <option value="Special FX">Special FX</option>
            <option value="Stunts">Stunts</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Visual FX">Visual FX</option>
            <option value="Wardrobe">Wardrobe</option>
          </select>
          <input type="text" id="description" name="description" placeholder="Element name (example: Black Teapot)" onChange={handleNewElementDescriptionInput} required />
          <input className="button" type="submit" id="submit" name="add-element" placeholder="Add element" />
        </form>
      );
    }
}

NewElementForm.propTypes = {
  history: PropTypes.object.isRequired,
  sceneId: PropTypes.string.isRequired,
};

export default NewElementForm;
