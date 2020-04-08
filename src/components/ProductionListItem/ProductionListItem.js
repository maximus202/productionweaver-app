import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductionListItem(props) {
  const { production } = props;
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

ProductionListItem.propTypes = {
  production: PropTypes.object.isRequired,
};

export default ProductionListItem;
