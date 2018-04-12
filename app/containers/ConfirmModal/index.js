/**
 *
 * ConfirmModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ConfirmModalComponent from 'components/ConfirmModalComponent';
import injectReducer from 'utils/injectReducer';
import makeSelectConfirmModal from './selectors';
import reducer from './reducer';

export class ConfirmModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ConfirmModalComponent />
    );
  }
}

ConfirmModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  confirmModal: makeSelectConfirmModal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'confirmModal', reducer });

export default compose(
  withReducer,
  withConnect,
)(ConfirmModal);
