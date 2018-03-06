import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const isLoggedIn = (token) => token !== false;

export const PropsRoute = ({ component, ...rest }) => (
  <Route {...rest} render={(routeProps) => renderMergedProps(component, routeProps, rest)} />
);

PropsRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export const PrivateRoute = ({ component, redirectTo, ...rest }) =>
  (
    <Route
      {...rest}
      render={(routeProps) => isLoggedIn ? (
          renderMergedProps(component, routeProps, rest)
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired,
};
