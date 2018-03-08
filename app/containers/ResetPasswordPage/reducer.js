/*
 *
 * ResetPasswordPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
});

function resetPasswordPageReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case RESET_PASSWORD_SUCCESS:
      return state
        .set('loading', false);
    case RESET_PASSWORD_FAILURE:
      return state
        .set('error', action.payload.errors)
        .set('loading', false);
    default:
      return state;
  }
}

export default resetPasswordPageReducer;
