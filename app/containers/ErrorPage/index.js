/**
 *
 * ErrorPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import ErrorPageComponent from 'components/ErrorPageComponent';


export class ErrorPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title> Error | Storypaddle </title>
          <meta name="description" content="Something went wrong!" />
        </Helmet>
        <ErrorPageComponent />
      </div>
    );
  }
}

ErrorPage.propTypes = {
};


function mapDispatchToProps() {
  return {
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(ErrorPage);
