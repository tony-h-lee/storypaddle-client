/**
 *
 * TermsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import TermsPageComponent from 'components/TermsPageComponent';

export class TermsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Terms of Service | Storypaddle</title>
          <meta name="description" content="Read our terms and conditions regarding our platform usage" />
        </Helmet>
        <TermsPageComponent />
      </div>
    );
  }
}

TermsPage.propTypes = {
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
)(TermsPage);
