/**
 *
 * NarrativesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import NarrativesPageComponent from 'components/NarrativesPageComponent';
import ErrorPage from 'containers/ErrorPage';
import ErrorWrapper from 'components/ErrorWrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNarrativesPage, { makeSelectNarrativesList } from './selectors';
import * as narrativeActions from './actions';
import reducer from './reducer';
import saga from './saga';

export class NarrativesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    if (this.props.narrativesPage.get('narratives').size < 1) this.props.actions.getNarratives();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Storypaddle | Narratives </title>
          <meta name="description" content="Browse what others have created." />
        </Helmet>
        <ErrorWrapper
          error={this.props.narrativesPage.get('error')}
          notFoundComponent={<div> Not Found </div>}
          failedFetchComponent={<ErrorPage />}
          successComponent={<NarrativesPageComponent {...this.props} />}
        />
      </div>
    );
  }
}

NarrativesPage.propTypes = {
  actions: PropTypes.object,
  narrativesPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  narrativesPage: makeSelectNarrativesPage(),
  narratives: makeSelectNarrativesList(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(narrativeActions, dispatch),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'narrativesPage', reducer });
const withSaga = injectSaga({ key: 'narrativesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NarrativesPage);
