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
      } = this.context;
      this.context.clearError();
      ProductionApiService.getProduction(match.params.productionId)
        .then(setProduction)
        .catch(setError);
    }

    renderProduction() {
      const { production } = this.context;
      return (
        <>
          <NavBar />
          <header>
            <section>
              <h1>{production.production_title}</h1>
              <p>Production overview</p>
            </section>
          </header>
          <main>
            <section className="module-header">
              <h2>Production Tools</h2>
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
  match: PropTypes.oneOfType([
    PropTypes.string,
  ]).isRequired,
  productionId: PropTypes.number.isRequired,
};

export default ProductionPage;
