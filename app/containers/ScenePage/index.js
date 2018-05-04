/**
 *
 * ScenePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import ScenePageComponent from 'components/ScenePageComponent/';
import NarrativeOverviewNotFound from 'components/NarrativeOverviewPageComponent/NarrativeOverviewNotFound';
import ErrorWrapper from 'components/ErrorWrapper';
import ErrorPage from 'containers/ErrorPage';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as scenePageActions from './actions';
import makeSelectScenePage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ScenePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.actions.getScene(this.props.match.params.id, this.props.user ? this.props.user.get('id') : null);
  }
  componentDidUpdate() {
    // If participating user, scroll to the controls
    if (this.props.token && this.props.scenePage.getIn(['scene', 'narrative', 'roles']) !== undefined &&
      this.props.scenePage.getIn(['scene', 'narrative', 'roles'])
        .some((role) => role.get('user') === this.props.user.get('id'))) {
      this.comments.scrollIntoView(false);
    }
  }
  setRef = (node) => (this.comments = node);
  render() {
    return (
      <div ref={this.setRef}>
        <Helmet>
          <title> {this.props.scenePage.getIn(['scene', 'narrative', 'title']) !== undefined ?
            this.props.scenePage.getIn(['scene', 'narrative', 'title']) : 'Storypaddle'} </title>
          <meta name="description" content="Begin your story!" />
        </Helmet>
        <ErrorWrapper
          error={this.props.scenePage.get('error')}
          notFoundComponent={<NarrativeOverviewNotFound />}
          failedFetchComponent={<ErrorPage />}
          successComponent={<ScenePageComponent {...this.props} />}
        />

      </div>
    );
  }
}

ScenePage.propTypes = {
  token: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  actions: PropTypes.object,
  scenePage: PropTypes.object,
  match: PropTypes.object,
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  scenePage: makeSelectScenePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(scenePageActions, dispatch),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'scenePage', reducer });
const withSaga = injectSaga({ key: 'scenePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ScenePage);
