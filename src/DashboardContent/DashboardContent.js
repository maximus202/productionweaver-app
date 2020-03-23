import React, { Component } from 'react';
import ProductionsList from '../ProductionsList/ProductionsList';

class DashboardContent extends Component {
    render() {
        return (
            <main>
                <header>
                    <h1>Dashboard</h1>
                </header>
                <section className="module-header">
                    <h2>Productions</h2>
                    <button>Add production</button>
                </section>
                <section>
                    <ProductionsList />
                </section>
            </main>
        )
    }
}

export default DashboardContent;