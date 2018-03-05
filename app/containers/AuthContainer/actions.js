/*
 *
 * AuthContainer actions
 *
 */

import {
  SET_AUTH,
  UNSET_AUTH,
} from './constants';

/**
 * User successfully logs in or signs up.
 *
 * @param  {string} -> token : The JWT token retrieved from successful authentication.
 * @param  {object} -> user : The user object from login or signup
 *
 * @return {object} : An action object with a type of SET_AUTH passing the token and user
 */
export function setAuth(token, user) {
  return {
    type: SET_AUTH,
    token,
    user,
  };
}


/**
 * User logs out.
 *
 * @return {object} : An action object with a type of UNSET_AUTH
 */
export function unsetAuth() {
  return {
    type: UNSET_AUTH,
  };
}
