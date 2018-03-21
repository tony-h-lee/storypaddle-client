/*
 *
 * AuthContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_AUTH,
  UNSET_AUTH,
  SET_TOKEN,
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
  GET_ME_FAILURE,
} from './constants';

const initialState = fromJS({
  token: false,
  user: false,
  loading: false,
  error: false,
});

function authContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return state
        .set('token', action.token)
        .set('user', action.user);
    case UNSET_AUTH:
      return state
        .set('token', false)
        .set('user', false);
    case SET_TOKEN:
      return state
        .set('token', action.token);
    case GET_ME_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case GET_ME_SUCCESS:
      return state
        .set('loading', false)
        .set('user', action.user);
    case GET_ME_FAILURE:
      return state
        .set('error', action.payload.errors)
        .set('loading', false);
    default:
      return state;
  }
}

export default authContainerReducer;
