/*
 *
 * ChangePasswordPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
});

function changePasswordPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case CHANGE_PASSWORD_SUCCESS:
      return state
        .set('loading', false);
    case CHANGE_PASSWORD_FAILURE:
      return state
        .set('error', action.payload.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default changePasswordPageReducer;
