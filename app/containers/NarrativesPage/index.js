/**
 *
 * NarrativesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { parse } from 'qs';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import NarrativesPageComponent from 'components/NarrativesPageComponent';
import ErrorPage from 'containers/ErrorPage';
import ErrorWrapper from 'components/ErrorWrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNarrativesPage from './selectors';
import * as narrativeActions from './actions';
import reducer from './reducer';
import saga from './saga';

export class NarrativesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    if (this.props.location.search) {
      const query = parse(this.props.location.search.substr(1));
      this.props.actions.getNarratives(query.next ? query.next : false, query.previous ? query.previous : false);
    } else {
      this.props.actions.getNarratives(false, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      const query = parse(nextProps.location.search.substr(1));
      this.props.actions.getNarratives(query.next ? query.next : false, query.previous ? query.previous : false);
    }
    return false;
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
  location: PropTypes.object,
  actions: PropTypes.object,
  narrativesPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  narrativesPage: makeSelectNarrativesPage(),
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
