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
import { compose } from 'redux';
import NarrativesPageComponent from 'components/NarrativesPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNarrativesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class NarrativesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Storypaddle | Narratives </title>
          <meta name="description" content="Browse what others have created." />
        </Helmet>
        <NarrativesPageComponent />
      </div>
    );
  }
}

NarrativesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  narrativesPage: makeSelectNarrativesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
