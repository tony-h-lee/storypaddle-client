/**
 *
 * NarrativesPageContainer
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
import makeSelectNarrativesPageContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export class NarrativesPageContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>NarrativesPageContainer</title>
          <meta name="description" content="Description of NarrativesPageContainer" />
        </Helmet>
      </div>
    );
  }
}

NarrativesPageContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  narrativespagecontainer: makeSelectNarrativesPageContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'narrativesPageContainer', reducer });
const withSaga = injectSaga({ key: 'narrativesPageContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NarrativesPageContainer);
