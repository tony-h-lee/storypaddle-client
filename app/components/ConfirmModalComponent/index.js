/**
*
* ConfirmModalComponent
*
*/

import React from 'react';
import { Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const inline = {
  modal: {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const defaults = {
  header: 'Are you sure you wish to perform this action?',
  content: 'Please confirm to continue',
  cancelButton: 'Cancel',
  confirmButton: 'Confirm',
  size: 'large',
};


function ConfirmModalComponent(props) {
  const { confirmModal } = props;
  return (
    <Confirm
      style={inline.modal}
      open={confirmModal.get('open')}
      header={confirmModal.get('header') ? confirmModal.get('header') : defaults.header}
      content={confirmModal.get('content') ? confirmModal.get('content') : defaults.content}
      cancelButton={confirmModal.get('cancelButton') ? confirmModal.get('cancelButton') : defaults.cancelButton}
      confirmButton={confirmModal.get('confirmButton') ? confirmModal.get('confirmButton') : defaults.confirmButton}
      onCancel={confirmModal.get('handleCancel') ? confirmModal.get('handleCancel') : props.actions.close}
      onConfirm={confirmModal.get('handleConfirm') ? confirmModal.get('handleConfirm') : () => false}
    />
  );
}

ConfirmModalComponent.propTypes = {
  confirmModal: PropTypes.object,
  actions: PropTypes.object,
};

export default ConfirmModalComponent;
