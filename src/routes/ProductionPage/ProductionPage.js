/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductionApiService from '../../services/production-api-service';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';
import './ProductionPage.css';
import Loading from '../../components/Loading/Loading';

class ProductionPage extends Component {
    static contextType = Context

    componentDidMount() {
      const { match } = this.props;
      const {
        setProduction,
        setError,
        clearError,
      } = this.context;
      clearError();
      ProductionApiService.getProduction(match.params.productionId)
        .then(setProduction)
        .catch(setError);
    }

    renderProduction() {
      const { production } = this.context;
      return (
        <>
          <NavBar />
          <header className="ProductionPage__header">
            <section>
              <h2>
                {production.production_title}
                {' '}
                (2020)
              </h2>
              <p className="ProductionPage__header-list">Logline</p>
              <p>After taking an unknown drug, a young man becomes convinced that his uncle's house is haunted by his twin brother who died a year prior and now seeks to expose the truth about his death.</p>
              <p className="ProductionPage__header-list">Genre</p>
              <p>Drama</p>
              <p className="ProductionPage__header-list">Director</p>
              <p>Kilian Lombardi</p>
              <p className="ProductionPage__header-list">Writer/s</p>
              <p>Kilian Lombardi</p>
            </section>
          </header>
          <main>
            <section className="module-header">
              <h3>1. Set up your scenes</h3>
            </section>
            <section className="production-tools">
              <div className="script-breakdown-selection">
                <p><a href={`/script-breakdown/${production.id}`}>Script breakdown</a></p>
              </div>
            </section>
          </main>
        </>
      );
    }

    render() {
      const {
        error,
        production,
      } = this.context;
      let content;
      if (error) {
        content = (error.error === 'Production does not exist')
          ? <p>Production not found</p>
          : <p>There was an error</p>;
      } else if (!production.id) {
        content = <Loading />;
      } else {
        content = this.renderProduction();
      }
      return (
        <>
          {content}
        </>
      );
    }
}

ProductionPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ProductionPage;
