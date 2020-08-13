import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ProductionListItem(props) {
  const { production } = props;
  return (
    <tr>
      <td>
        <Link to={`/production/${production.id}`}>
          {production.production_title}
          {' '}
          (2012)
        </Link>
      </td>
      <td>
        TBD
      </td>
    </tr>
  );
}

ProductionListItem.propTypes = {
  production: PropTypes.object.isRequired,
};

export default ProductionListItem;
