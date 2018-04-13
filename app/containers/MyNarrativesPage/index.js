/**
 *
 * MyNarrativesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import MyNarrativesPageComponent from 'components/MyNarrativesPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as myNarrativesActions from './actions';
import makeSelectMyNarrativesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class MyNarrativesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.actions.loadMyNarratives(this.props.token);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>My Narratives | Storypaddle </title>
          <meta name="description" content="A list of my created Narratives." />
        </Helmet>
        <MyNarrativesPageComponent {...this.props} />
      </div>
    );
  }
}

MyNarrativesPage.propTypes = {
  token: PropTypes.string.isRequired,
  actions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  myNarrativesPage: makeSelectMyNarrativesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(myNarrativesActions, dispatch),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myNarrativesPage', reducer });
const withSaga = injectSaga({ key: 'myNarrativesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MyNarrativesPage);