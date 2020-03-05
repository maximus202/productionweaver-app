import React, { Component } from 'react';
import './ProductionTools.css';
import { Link } from 'react-router-dom';

class ProductionTools extends Component {
    render() {
        return (
            <>
                <section className="production-tool">
                    <h3><Link to={`/script-breakdown/${this.props.project.projectId}`}>Script breakdown</Link></h3>
                </section>
            </>
        )
    }
}

export default ProductionTools;