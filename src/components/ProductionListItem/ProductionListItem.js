import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProductionListItem extends Component {
    render() {
        const { production } = this.props
        return (
            <section className="project-item" key={production.id}>
                <Link to={`/production/${production.id}`}>
                    <img src="project-icon.png" alt="Production" className="project-icon" />
                    <h3>{production.production_title}</h3>
                </Link>
            </section>
        )
    }
}

export default ProductionListItem;