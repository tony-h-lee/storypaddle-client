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
} from './constants';

const initialState = fromJS({
  token: false,
  user: false,
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
    default:
      return state;
  }
}

export default authContainerReducer;
