/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';
import ProductionListItem from '../../components/ProductionListItem/ProductionListItem';
import ProductionApiService from '../../services/production-api-service';
import NavBar from '../../components/NavBar/NavBar';
import './AccountDashboardPage.css';

class AccountDashboard extends Component {
    static contextType = Context

    componentDidMount() {
      const {
        setProductionList,
        setError,
        clearError,
      } = this.context;
      clearError();
      ProductionApiService.getProductions()
        .then(setProductionList)
        .catch(setError);
    }

    renderProductions() {
      const { productionList = [] } = this.context;
      return productionList.map((production) => (
        <ProductionListItem
          key={production.id}
          production={production}
        />
      ));
    }

    render() {
      const { error } = this.context;
      return (
        <>
          <NavBar />
          <header>
            <section className="container">
              <h1>Dashboard</h1>
            </section>
          </header>
          <main>
            <section className="container">
              <h2>Active productions</h2>
              <ul className="AccountDashboardPage__ul">
                {error
                  ? <p>No productions.</p>
                  : this.renderProductions()}
              </ul>
              <Link to="/add-production"><button type="button" className="button">Add Production</button></Link>
              <Link to="/"><button type="button" className="button outlined-button">Archived Productions</button></Link>
            </section>
          </main>
        </>
      );
    }
}

export default AccountDashboard;
