/**
 *
 * NarrativeOverviewPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import NarrativeOverviewPageComponent from 'components/NarrativeOverviewPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNarrativeOverviewPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as narrativeOverviewActions from './actions';

export class NarrativeOverviewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.actions.getNarrative(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <Helmet>
          <title> Narrative </title>
          <meta name="description" content="Read and join this narrative!" />
        </Helmet>
        <NarrativeOverviewPageComponent />
      </div>
    );
  }
}

NarrativeOverviewPage.propTypes = {
  actions: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  narrativeOverviewPage: makeSelectNarrativeOverviewPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(narrativeOverviewActions, dispatch),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'narrativeOverviewPage', reducer });
const withSaga = injectSaga({ key: 'narrativeOverviewPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NarrativeOverviewPage);
