import React, { Component } from 'react';
import { Context } from '../../Context/Context';
import ProductionListItem from '../../components/ProductionListItem/ProductionListItem';
import ProductionApiService from '../../services/production-api-service';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

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
                <NavBar />
                <header>
                    <section>
                        <h1>Your dashboard</h1>
                    </section>
                </header>
                <main>
                    <section className="module-header">
                        <h2>Productions</h2>
                        <Link to="/add-production">Add</Link>
                    </section>
                    <section>
                        {error
                            ? <section><p>No productions.</p></section>
                            : this.renderProductions()
                        }
                    </section>
                </main>
            </>
        )
    }
}

export default AccountDashboard;