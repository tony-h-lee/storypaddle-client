/**
 *
 * ConfirmModal
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import ConfirmModalComponent from 'components/ConfirmModalComponent';
import injectReducer from 'utils/injectReducer';
import * as confirmModalActions from './actions';
import makeSelectConfirmModal from './selectors';
import reducer from './reducer';

export class ConfirmModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ConfirmModalComponent {...this.props} />
    );
  }
}

ConfirmModal.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  confirmModal: makeSelectConfirmModal(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(confirmModalActions, dispatch),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'confirmModal', reducer });

export default compose(
  withReducer,
  withConnect,
)(ConfirmModal);
