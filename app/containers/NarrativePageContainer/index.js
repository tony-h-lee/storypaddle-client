/**
 *
 * NarrativePageContainer
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
import makeSelectNarrativePageContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export class NarrativePageContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>NarrativePageContainer</title>
          <meta name="description" content="Description of NarrativePageContainer" />
        </Helmet>
      </div>
    );
  }
}

NarrativePageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  narrativepagecontainer: makeSelectNarrativePageContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'narrativePageContainer', reducer });
const withSaga = injectSaga({ key: 'narrativePageContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NarrativePageContainer);
