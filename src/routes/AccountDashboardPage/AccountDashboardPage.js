import React, { Component } from 'react';
import { Context } from '../../Context/Context';
import ProductionListItem from '../../components/ProductionListItem/ProductionListItem';
import ProductionApiService from '../../services/production-api-service';
import { Link } from 'react-router-dom';

class AccountDashboard extends Component {
    static contextType = Context

    componentDidMount() {
        this.context.clearError()
        ProductionApiService.getProductions()
            .then(this.context.setProductionList)
            .catch(this.context.setError)
    }

    renderProductions() {
        const { productionList = [] } = this.context
        return productionList.map(production =>
            <ProductionListItem
                key={production.id}
                production={production}
            />
        )
    }

    render() {
        const { error } = this.context
        return (
            <>
                <header>
                    <h1>Dashboard</h1>
                </header>
                <section className="module-header">
                    <h2>Productions</h2>
                    <Link to="/add-production">Add production</Link>
                </section>
                <section>
                    {error
                        ? <p>There was an error, try again.</p>
                        : this.renderProductions()
                    }
                </section>
            </>
        )
    }
}

export default AccountDashboard;