/*
 *
 * ConfirmModal actions
 *
 */

import {
  OPEN,
  CLOSE,
} from './constants';

export function open(header, content, button, size, handleConfirm, handleCancel) {
  return {
    type: OPEN,
    header,
    content,
    button,
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
