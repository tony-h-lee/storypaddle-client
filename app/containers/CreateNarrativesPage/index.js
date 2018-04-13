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
import { compose, bindActionCreators } from 'redux';
import CreateNarrativesPageComponent from 'components/CreateNarrativesPageComponent';
import ErrorPage from 'containers/ErrorPage';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as CreateNarrativesActions from './actions';
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
        {
          this.props.createNarrativesPage.get('error')
          && this.props.createNarrativesPage.get('error') === 'Failed to fetch' ?
            <ErrorPage />
            : <CreateNarrativesPageComponent {...this.props} />
        }

      </div>
    );
  }
}

CreateNarrativesPage.propTypes = {
  createNarrativesPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  createNarrativesPage: makeSelectCreateNarrativesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CreateNarrativesActions, dispatch),
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
