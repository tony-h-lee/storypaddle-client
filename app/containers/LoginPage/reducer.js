/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
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
    case LOGIN_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default loginPageReducer;
