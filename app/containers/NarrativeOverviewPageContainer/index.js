/**
 *
 * NarrativeOverviewPageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNarrativeOverviewPageContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export class NarrativeOverviewPageContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>NarrativeOverviewPageContainer</title>
          <meta name="description" content="Description of NarrativeOverviewPageContainer" />
        </Helmet>
      </div>
    );
  }
}

NarrativeOverviewPageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  narrativeoverviewpagecontainer: makeSelectNarrativeOverviewPageContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'narrativeOverviewPageContainer', reducer });
const withSaga = injectSaga({ key: 'narrativeOverviewPageContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NarrativeOverviewPageContainer);
