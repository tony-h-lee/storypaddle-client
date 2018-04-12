/*
 *
 * AuthContainer actions
 *
 */

import {
  SET_AUTH,
  UNSET_AUTH,
  SET_TOKEN,
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
  GET_ME_FAILURE,
  SET_JOINED_NARRATIVE,
  UNSET_JOINED_NARRATIVE,
  SET_CREATED_NARRATIVE,
} from './constants';


export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}


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


/**
 * Dispatched when refreshed on auth container root
 *
 * @param  {string} -> token : The access token retrieved from login
 *
 * @return {object} : An action object with a type of GET_ME_REQUEST
 */
export function getMe(token) {
  return {
    type: GET_ME_REQUEST,
    token,
  };
}


/**
 * Dispatched when get me succeeds
 *
 * @return {object} : An action object with a type of GET_ME_SUCCESS and the user object
 */
export function getMeSuccess(user) {
  return {
    type: GET_ME_SUCCESS,
    user,
  };
}


/**
 * Dispatched when get me fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of GET_ME_FAILURE passing the error
 */
export function getMeFailure(error) {
  return {
    type: GET_ME_FAILURE,
    error,
  };
}


/**
 * Dispatched when user successfully creates a narrative
 *
 * @param  {string} -> narrative : The narrative id of the narrative successfully created
 *
 * @return {object} : An action object with a type of SET_JOINED_NARRATIVE and the narrative id
 */
export function setCreatedNarrative(narrative) {
  return {
    type: SET_CREATED_NARRATIVE,
    narrative,
  };
}


/**
 * Dispatched when user successfully joins a narrative with a role
 *
 * @param  {string} -> narrative : The narrative id of the narrative successfully joined
 *
 * @return {object} : An action object with a type of SET_JOINED_NARRATIVE and the narrative id
 */
export function setJoinedNarrative(narrative) {
  return {
    type: SET_JOINED_NARRATIVE,
    narrative,
  };
}


/**
 * Dispatched when user successfully leaves their role in a narrative
 *
 * @param  {string} -> narrative : The narrative id of the narrative successfully left
 *
 * @return {object} : An action object with a type of UNSET_JOINED_NARRATIVE and the narrative id
 */
export function unsetJoinedNarrative(narrative) {
  return {
    type: UNSET_JOINED_NARRATIVE,
    narrative,
  };
}
