import React, { Component } from 'react';
import ProductionsList from '../ProductionsList/ProductionsList';
import { Link } from 'react-router-dom';

class DashboardContent extends Component {
    render() {
        return (
            <main>
                <header>
                    <h1>Dashboard</h1>
                </header>
                <section className="module-header">
                    <h2>Productions</h2>
                    <Link to="/add-production">Add production</Link>
                </section>
                <section>
                    <ProductionsList />
                </section>
            </main>
        )
    }
}

export default DashboardContent;