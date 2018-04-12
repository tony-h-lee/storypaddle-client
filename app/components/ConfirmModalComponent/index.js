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


function ConfirmModalComponent(props) {
  return (
    <Confirm
      style={inline.modal}
      open={props.open}
      onCancel={props.handleCancel}
      onConfirm={props.handleConfirm}
    />
  );
}

ConfirmModalComponent.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default ConfirmModalComponent;
