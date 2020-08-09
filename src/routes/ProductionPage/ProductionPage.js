/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
          <section className="container">
            <header className="header">
              <h1>
                {production.production_title}
                {' '}
                (2020)
              </h1>
            </header>
            <main>
              <section className="ProductionPage__main">
                <p>Producer/s: Kilian Lombardi</p>
                <p>Director: Kilian Lombardi</p>
                <p>Writer/s: Kilian Lombardi</p>
                <p>Logline: After taking an unknown drug, a young man becomes convinced that his uncle's house is haunted by his twin brother who died a year prior and now seeks to expose the truth about his death.</p>
                <p>Genre: Drama</p>
                <p>Release Date: November 20, 2020</p>
                <Link>
                  Edit Project
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Story Outline
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Write/Import Script
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Script Breakdown
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Elements
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Shot List
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Storyboards
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Shooting Schedule
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Calendar
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Budget
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Cast/Crew
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Call Sheets
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Email Cast/Crew
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
                <Link>
                  Reports
                  {' '}
                  <i className="fas fa-caret-right" />
                </Link>
              </section>
            </main>
          </section>
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
