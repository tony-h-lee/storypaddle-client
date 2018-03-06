/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case LOGIN_SUCCESS:
      return state
        .set('loading', false);
    case LOGIN_FAILURE:
      return state
        .set('error', action.payload.errors)
        .set('loading', false);
    default:
      return state;
  }
}

export default loginPageReducer;
