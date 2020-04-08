import React from 'react';
import { Link } from 'react-router-dom';

function ProductionListItem() {
  const { production } = this.props;
  return (
    <li>
      <section className="production-item" key={production.id}>
        <Link to={`/production/${production.id}`}>
          <img src="productionicon.png" alt="Production" className="production-icon" />
          <h3>{production.production_title}</h3>
        </Link>
      </section>
    </li>
  );
}

export default ProductionListItem;
