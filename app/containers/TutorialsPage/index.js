/**
 *
 * TutorialsPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import TutorialsPageComponent from 'components/TutorialsPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as tutorialsPageActions from './actions';
import makeSelectTutorialsPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class TutorialsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Tutorials | Storypaddle </title>
          <meta name="description" content="Guides from getting started to rules and conventions" />
        </Helmet>
        <TutorialsPageComponent {...this.props} />
      </div>
    );
  }
}

TutorialsPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  tutorialsPage: makeSelectTutorialsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tutorialsPageActions, dispatch),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tutorialsPage', reducer });
const withSaga = injectSaga({ key: 'tutorialsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TutorialsPage);
