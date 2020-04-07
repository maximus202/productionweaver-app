import React, { Component } from 'react';
import { Context } from '../../Context/Context';
import ProductionApiService from '../../services/production-api-service';

class AddProductionForm extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);
        this.state = {
            newProductionTitle: '',
            handleNewProductionTitle: this.handleNewProductionTitle,
            handleSubmitNewProduction: this.handleSubmitNewProduction,
        }
    }

    handleNewProductionTitle = (event) => {
        this.setState({
            newProductionTitle: event.target.value
        })
    }

    handleSubmitNewProduction = (e, history) => {
        e.preventDefault();
        const data = {
            'production_title': this.state.newProductionTitle
        }
        ProductionApiService.submitNewProduction(data)
            .then(responseJson => {
                this.setState({
                    productionList: [...this.context.productionList, responseJson]
                })
            })
            .then(() => history.push('/'))
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <form onSubmit={(e) => this.state.handleSubmitNewProduction(e, this.props.history)}>
                <label htmlFor="project-name">Production name</label>
                <input type="text" id="project-name" name="project-name" onChange={this.state.handleNewProductionTitle} required />
                <input type="submit" id="submit" name="add-project" />
            </form>
        )
    }
}

export default AddProductionForm;