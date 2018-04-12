/*
 *
 * ConfirmModal actions
 *
 */

import {
  OPEN,
  CLOSE,
} from './constants';

export function open(header, content, confirmButton, cancelButton, size, handleConfirm, handleCancel) {
  return {
    type: OPEN,
    header,
    content,
    confirmButton,
    cancelButton,
    size,
    handleConfirm,
    handleCancel,
  };
}

export function close() {
  return {
    type: CLOSE,
  };
}
