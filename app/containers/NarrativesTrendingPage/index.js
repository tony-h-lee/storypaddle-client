/**
 *
 * NarrativesTrendingPage
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
import makeSelectNarrativesTrendingPage from './selectors';
import * as narrativeActions from './actions';
import reducer from './reducer';
import saga from './saga';

export class NarrativesTrendingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    if (this.props.narrativesTrendingPage.get('narratives').size < 1) {
      this.props.actions.getNarratives();
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Storypaddle | Narratives </title>
          <meta name="description" content="Browse what others have created." />
        </Helmet>
        <ErrorWrapper
          error={this.props.narrativesTrendingPage.get('error')}
          notFoundComponent={<div> Not Found </div>}
          failedFetchComponent={<ErrorPage />}
          successComponent={<NarrativesPageComponent {...this.props} />}
        />
      </div>
    );
  }
}

NarrativesTrendingPage.propTypes = {
  actions: PropTypes.object,
  narrativesTrendingPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  narrativesTrendingPage: makeSelectNarrativesTrendingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(narrativeActions, dispatch),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'narrativesTrendingPage', reducer });
const withSaga = injectSaga({ key: 'narrativesTrendingPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NarrativesTrendingPage);
