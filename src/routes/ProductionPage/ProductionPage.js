import React, { Component } from 'react';
import ProductionApiService from '../../services/production-api-service';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';
import './ProductionPage.css';

class ProductionPage extends Component {
    static defaultProps = {
        match: { params: {} },
    }
    static contextType = Context

    componentDidMount() {
        const { productionId } = this.props.match.params
        this.context.clearError()
        ProductionApiService.getProduction(productionId)
            .then(this.context.setProduction)
            .catch(this.context.setError)
    }

    renderProduction() {
        const { production } = this.context
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
        )
    }

    render() {
        let content
        if (this.context.error) {
            content = (this.context.error.error === 'Production does not exist')
                ? <p>Production not found</p>
                : <p>There was an error</p>
        } else if (!this.context.production.id) {
            content = <div>Loading...</div>
        } else {
            content = this.renderProduction()
        }
        return (
            <>
                {content}
            </>
        )
    }
}

export default ProductionPage;