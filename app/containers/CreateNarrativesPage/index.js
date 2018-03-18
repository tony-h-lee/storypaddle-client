/**
 *
 * CreateNarrativesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import CreateNarrativesPageComponent from 'components/CreateNarrativesPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCreateNarrativesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class CreateNarrativesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Storypaddle | Create Narrative </title>
          <meta name="description" content="Create a scenario and your desired characters." />
        </Helmet>
        <CreateNarrativesPageComponent />
      </div>
    );
  }
}

CreateNarrativesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createNarrativesPage: makeSelectCreateNarrativesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'createNarrativesPage', reducer });
const withSaga = injectSaga({ key: 'createNarrativesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CreateNarrativesPage);
