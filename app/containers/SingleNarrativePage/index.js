/**
 *
 * SingleNarrativePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSingleNarrativePage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class SingleNarrativePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Storypaddle | Narrative </title>
          <meta name="description" content="Follow the story, continue the story." />
        </Helmet>
      </div>
    );
  }
}

SingleNarrativePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  narrativepagecontainer: makeSelectSingleNarrativePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'singleNarrativePage', reducer });
const withSaga = injectSaga({ key: 'singleNarrativePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SingleNarrativePage);
