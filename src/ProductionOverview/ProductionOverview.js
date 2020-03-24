import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import ProductionOverviewContent from '../ProductionOverviewContent/ProductionOverviewContent';

class ProductionOverview extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <>
                <NavBar />
                <ProductionOverviewContent project={this.props.match.params} />
                <Footer />
            </>
        )
    }
}

export default ProductionOverview;