/**
 *
 * JoinedNarrativesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import JoinedNarrativesPageComponent from 'components/JoinedNarrativesPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as joinedNarrativesActions from './actions';
import makeSelectJoinedNarrativesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class JoinedNarrativesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.actions.loadJoinedNarratives(this.props.token);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title> Joined Narratives | Storypaddle </title>
          <meta name="description" content="A list of my joined narratives." />
        </Helmet>
        <JoinedNarrativesPageComponent {...this.props} />
      </div>
    );
  }
}

JoinedNarrativesPage.propTypes = {
  token: PropTypes.string.isRequired,
  actions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  joinedNarrativesPage: makeSelectJoinedNarrativesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(joinedNarrativesActions, dispatch),
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
