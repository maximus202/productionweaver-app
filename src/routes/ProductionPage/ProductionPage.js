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
                <table>
                  <thead>
                    <tr>
                      <th>Info</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Producer/s</td>
                      <td>Kilian Lombardi</td>
                    </tr>
                    <tr>
                      <td>Director/s</td>
                      <td>Kilian Lombardi</td>
                    </tr>
                    <tr>
                      <td>Writer/s</td>
                      <td>Kilian Lombardi</td>
                    </tr>
                    <tr>
                      <td>Logline</td>
                      <td>After taking an unknown drug, a young man becomes convinced that his uncle's house is haunted by his twin brother who died a year prior and now seeks to expose the truth about his death.</td>
                    </tr>
                    <tr>
                      <td>Genre</td>
                      <td>Drama</td>
                    </tr>
                    <tr>
                      <td>Release Date</td>
                      <td>November 20, 2020</td>
                    </tr>
                  </tbody>
                </table>
                <ul className="ProductionPage__ul">
                  <li>
                    <Link>
                      Edit Project
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Story Outline
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Write/Import Script
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`/script-breakdown/${production.id}`}>
                      Script Breakdown
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Elements
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Shot List
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Storyboards
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Shooting Schedule
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Calendar
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Budget
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Cast/Crew
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Call Sheets
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Email Cast/Crew
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Reports
                      {' '}
                      <i className="fas fa-caret-right" />
                    </Link>
                  </li>
                </ul>
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
