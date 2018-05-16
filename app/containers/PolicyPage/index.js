/**
 *
 * PolicyPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import PolicyPageComponent from 'components/PolicyPageComponent';

export class PolicyPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Privacy Policy | Storypaddle</title>
          <meta name="description" content="Read our policy regarding your privacy" />
        </Helmet>
        <PolicyPageComponent />
      </div>
    );
  }
}

PolicyPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(PolicyPage);
