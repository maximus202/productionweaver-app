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
          <header className="ProductionPage__header header header-100vh">
            <section className="ProductionPage__header-container container">
              <h1>
                {production.production_title}
                {' '}
                (2020)
              </h1>
              <p className="bold">
                Produced by Kilian Lombardi.
                Directed by Kilian Lombardi.
              </p>
              <Link>
                Project details
                {' '}
                <i className="fas fa-caret-right" />
              </Link>
              <Link>
                Story
                {' '}
                <i className="fas fa-caret-right" />
              </Link>
              <Link>
                Production breakdown
                {' '}
                <i className="fas fa-caret-right" />
              </Link>
              <Link>
                Scheduling
                {' '}
                <i className="fas fa-caret-right" />
              </Link>
              <Link>
                Finance
                {' '}
                <i className="fas fa-caret-right" />
              </Link>
              <Link>
                Cast/Crew management
                {' '}
                <i className="fas fa-caret-right" />
              </Link>
              <Link>
                Reports
                {' '}
                <i className="fas fa-caret-right" />
              </Link>
            </section>
          </header>
          <main>
            <section className="container">
              <h2>Project details</h2>
              <p className="bold">Producer/s</p>
              <p>Kilian Lombardi</p>
              <p className="bold">Director</p>
              <p>Kilian Lombardi</p>
              <p className="bold">Writer/s</p>
              <p>Kilian Lombardi</p>
              <p className="bold">Logline</p>
              <p>After taking an unknown drug, a young man becomes convinced that his uncle's house is haunted by his twin brother who died a year prior and now seeks to expose the truth about his death.</p>
              <p className="bold">Genre</p>
              <p>Drama</p>
              <p className="bold">Release Date</p>
              <p>November 20, 2020</p>
              <Link>
                <button className="button" type="button">
                  Edit project
                </button>
              </Link>
            </section>
            <section className="container">
              <h2>Story</h2>
              <Link><button type="button" className="button">Story outline</button></Link>
              <Link><button type="button" className="button">Write/Import Script</button></Link>
            </section>
            <section className="container">
              <h2>Production breakdown</h2>
              <Link to={`/script-breakdown/${production.id}`}><button className="button" type="button">Script breakdown</button></Link>
              <Link><button type="button" className="button">Elements</button></Link>
              <Link><button type="button" className="button">Shot Listing</button></Link>
              <Link><button type="button" className="button">Storyboards</button></Link>
            </section>
            <section className="container">
              <h2>Scheduling</h2>
              <Link><button type="button" className="button">Shooting Schedule</button></Link>
              <Link><button type="button" className="button">Calendar</button></Link>
            </section>
            <section className="container">
              <h2>Finance</h2>
              <Link><button type="button" className="button">Production Budget</button></Link>
            </section>
            <section className="container">
              <h2>Cast/Crew management</h2>
              <Link><button type="button" className="button">Contacts</button></Link>
              <Link><button type="button" className="button">Call Sheets</button></Link>
              <Link><button type="button" className="button">Email Cast/Crew</button></Link>
            </section>
            <section className="container">
              <h2>Reports</h2>
              <Link><button type="button" className="button">Breakdown by Production Day</button></Link>
            </section>
            <section />
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
