/*
 *
 * ConfirmModal reducer
 *
 */

import { fromJS } from 'immutable';
import {
  OPEN,
  CLOSE,
} from './constants';

const initialState = fromJS({
  open: false,
  header: false,
  content: false,
  button: false,
  size: false,
  handleConfirm: false,
  handleCancel: false,
});

function confirmModalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return state
        .set('header', true)
        .set('header', action.header)
        .set('content', action.content)
        .set('button', action.button)
        .set('size', action.size)
        .set('handleConfirm', action.handleConfirm)
        .set('handleCancel', action.handleCancel);
    case CLOSE:
      return state
        .set('open', false)
        .set('header', false)
        .set('content', false)
        .set('button', false)
        .set('size', false)
        .set('handleConfirm', false)
        .set('handleCancel', false);
    default:
      return state;
  }
}

export default confirmModalReducer;
