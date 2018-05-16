/**
 *
 * HelpPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import HelpPageComponent from 'components/HelpPageComponent';

export class HelpPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Help | Storypaddle</title>
          <meta name="description" content="Contact us with any questions you have!" />
        </Helmet>
        <HelpPageComponent />
      </div>
    );
  }
}

HelpPage.propTypes = {
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
)(HelpPage);
