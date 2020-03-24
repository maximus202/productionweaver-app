import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer.js';
import ProductionOverviewContent from '../ProductionOverviewContent/ProductionOverviewContent';

class ProductionOverview extends Component {
    render() {
        return (
            <>
                <NavBar />
                <ProductionOverviewContent history={this.props.history} />
                <Footer />
            </>
        )
    }
}

export default ProductionOverview;