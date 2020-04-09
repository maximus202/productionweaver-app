/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../services/token-service';

export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={(componentProps) => (
        TokenService.hasAuthToken()
          ? <Component {...componentProps} />
          : (
            <Redirect
              to={{
                pathname: '/home',
                state: { from: componentProps.location },
              }}
            />
          )
      )}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
