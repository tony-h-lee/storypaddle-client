/**
 *
 * JoinedNarrativesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { parse } from 'qs';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import JoinedNarrativesPageComponent from 'components/JoinedNarrativesPageComponent';
import ErrorPage from 'containers/ErrorPage';
import ErrorWrapper from 'components/ErrorWrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { open } from 'containers/ConfirmModal/actions';
import * as joinedNarrativesActions from './actions';
import makeSelectJoinedNarrativesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class JoinedNarrativesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    if (this.props.location.search) {
      const query = parse(this.props.location.search.substr(1));
      this.props.actions.loadJoinedNarratives(this.props.token, this.props.user.get('id'),
        query.next ? query.next : false, query.previous ? query.previous : false);
    } else {
      this.props.actions.loadJoinedNarratives(this.props.token, this.props.user.get('id'), false, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      const query = parse(nextProps.location.search.substr(1));
      this.props.actions.loadJoinedNarratives(this.props.token, this.props.user.get('id'),
        query.next ? query.next : false, query.previous ? query.previous : false);
    }
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title> Joined Narratives | Storypaddle </title>
          <meta name="description" content="A list of my joined narratives." />
        </Helmet>
        <ErrorWrapper
          error={this.props.joinedNarrativesPage.get('error')}
          notFoundComponent={<div> Not Found </div>}
          failedFetchComponent={<ErrorPage />}
          successComponent={<JoinedNarrativesPageComponent {...this.props} />}
        />
      </div>
    );
  }
}

JoinedNarrativesPage.propTypes = {
  location: PropTypes.object,
  token: PropTypes.string.isRequired,
  actions: PropTypes.object,
  joinedNarrativesPage: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  joinedNarrativesPage: makeSelectJoinedNarrativesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(joinedNarrativesActions, dispatch),
    openConfirm: (header, content, confirmButton, cancelButton, size, handleConfirm, handleCancel) =>
      dispatch(open(header, content, confirmButton, cancelButton, size, handleConfirm, handleCancel)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'joinedNarrativesPage', reducer });
const withSaga = injectSaga({ key: 'joinedNarrativesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(JoinedNarrativesPage);
