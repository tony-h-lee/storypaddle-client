/*
 *
 * SignupPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
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
    case SIGNUP_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default signupPageReducer;
