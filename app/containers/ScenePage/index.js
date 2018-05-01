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
  componentWillMount() {
    this.props.actions.getScene(this.props.match.params.id);
  }
  render() {
    return (
      <div>
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
  actions: PropTypes.object,
  scenePage: PropTypes.object,
  match: PropTypes.object,
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
