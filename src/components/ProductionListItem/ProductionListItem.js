import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductionListItem.css';

function ProductionListItem(props) {
  const { production } = props;
  return (
    <li>
      <Link to={`/production/${production.id}`}>
        <h3 className="title">{production.production_title}</h3>
      </Link>
    </li>
  );
}

ProductionListItem.propTypes = {
  production: PropTypes.object.isRequired,
};

export default ProductionListItem;
