/**
 *
 * EditNarrativesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import EditNarrativesPageComponent from 'components/EditNarrativesPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as editNarrativesActions from './actions';
import makeSelectEditNarrativesPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class EditNarrativesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.actions.getNarrative(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <Helmet>
          <title> Edit { this.props.editNarrativesPage.get('narrative') ?
            this.props.editNarrativesPage.getIn(['narrative', 'title']) : 'Narrative' } | Storypaddle </title>
          <meta name="description" content="Make changes to your Narrative!" />
        </Helmet>
        <EditNarrativesPageComponent {...this.props} />
      </div>
    );
  }
}

EditNarrativesPage.propTypes = {
  actions: PropTypes.object,
  editNarrativesPage: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  editNarrativesPage: makeSelectEditNarrativesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(editNarrativesActions, dispatch),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'editNarrativesPage', reducer });
const withSaga = injectSaga({ key: 'editNarrativesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EditNarrativesPage);
