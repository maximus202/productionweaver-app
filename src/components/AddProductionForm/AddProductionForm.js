/* eslint-disable no-console */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../Context/Context';
import ProductionApiService from '../../services/production-api-service';
// import './AddProductionForm.css';

class AddProductionForm extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      newProductionTitle: '',
      handleNewProductionTitle: this.handleNewProductionTitle,
      handleSubmitNewProduction: this.handleSubmitNewProduction,
    };
  }

    handleNewProductionTitle = (event) => {
      this.setState({
        newProductionTitle: event.target.value,
      });
    }

    handleSubmitNewProduction = (e, history) => {
      e.preventDefault();
      const { newProductionTitle } = this.state;
      const data = {
        production_title: newProductionTitle,
      };
      ProductionApiService.submitNewProduction(data)
        .then((responseJson) => {
          const { productionList } = this.context;
          this.setState({
            // eslint-disable-next-line react/no-unused-state
            productionList: [...productionList, responseJson],
          });
        })
        .then(() => history.push('/'))
        .catch((error) => {
          console.error({ error });
        });
    }

    render() {
      const { history } = this.props;
      const { handleSubmitNewProduction, handleNewProductionTitle } = this.state;
      return (
        <form onSubmit={(e) => handleSubmitNewProduction(e, history)}>
          <label htmlFor="project-name">Production name</label>
          <input type="text" placeholder="Production name" id="project-name" name="project-name" onChange={handleNewProductionTitle} required />
          <input type="submit" id="submit" name="add-project" />
        </form>
      );
    }
}

AddProductionForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AddProductionForm;
