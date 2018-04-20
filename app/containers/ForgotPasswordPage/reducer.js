/*
 *
 * ForgotPasswordPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
});

function forgotPasswordPageReducer(state = initialState, action) {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case FORGOT_PASSWORD_SUCCESS:
      return state
        .set('loading', false);
    case FORGOT_PASSWORD_FAILURE:
      return state
        .set('error', action.payload.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default forgotPasswordPageReducer;
