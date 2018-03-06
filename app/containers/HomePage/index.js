/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import AuthWrapper from 'components/AuthWrapper';
import LandingPage from 'containers/LandingPage';
import DashboardPage from 'containers/DashboardPage';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AuthWrapper
        token={this.props.token}
        AuthComponent={DashboardPage}
        PublicComponent={LandingPage}
      />
    );
  }
}

HomePage.propTypes = {
  token: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};
