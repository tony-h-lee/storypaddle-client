/*
 *
 * SignupPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
});

function signupPageReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case SIGNUP_SUCCESS:
      return state
        .set('loading', false);
    case SIGNUP_FAILURE:
      return state
        .set('error', action.payload.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default signupPageReducer;
