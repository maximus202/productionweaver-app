import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductionListItem(props) {
  const { production } = props;
  return (
    <li>
      <Link to={`/production/${production.id}`}>
        {production.production_title}
        {' '}
        (2012)
      </Link>
    </li>
  );
}

ProductionListItem.propTypes = {
  production: PropTypes.object.isRequired,
};

export default ProductionListItem;
