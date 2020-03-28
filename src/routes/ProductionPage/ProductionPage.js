import React, { Component } from 'react';
import ProductionApiService from '../../services/production-api-service';
import { Context } from '../../Context/Context';
import NavBar from '../../components/NavBar/NavBar';

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

    componentWillUnmount() {
        //this.context.clearProduction()
    }

    renderProduction() {
        const { production } = this.context
        return <>
            <NavBar />
            <header>
                <h1>{production.production_title}</h1>
                <p>Production overview</p>
            </header>
            <main>
                <section className="module-header">
                    <h2>Production Tools</h2>
                </section>
                <section>
                    <h3><a href={`/script-breakdown/${production.id}`}>Script breakdown</a></h3>
                </section>
            </main>
        </>
    }

    render() {
        const { error, production } = this.context
        let content
        if (error) {
            content = (error.error === 'Production does not exist')
                ? <p>Production not found</p>
                : <p>There was an error</p>
        } else if (!production.id) {
            content = <div>Loading...</div>
        } else {
            content = this.renderProduction()
        }
        return (
            <>
                <section>
                    {content}
                </section>
            </>
        )
    }
}

export default ProductionPage;