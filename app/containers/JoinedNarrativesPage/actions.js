/*
 *
 * JoinedNarrativesPage actions
 *
 */

import {
  LOAD_JOINED_REQUEST,
  LOAD_JOINED_SUCCESS,
  LOAD_JOINED_FAILURE,
} from './constants';

/**
 * Dispatched on Join Narratives Page init
 *
 * @param  {string} -> token : The access token retrieved from auth
 *
 * @return {object} : An action object with a type of LOAD_JOINED_REQUEST and token string
 */
export function loadJoinedNarratives(token) {
  return {
    type: LOAD_JOINED_REQUEST,
    token,
  };
}


/**
 * Dispatched when successfully retrieve user joined narratives
 *
 * @param  {array} -> narratives : A list of user's joined narratives
 *
 * @return {object} : An action object with a type of LOAD_JOINED_SUCCESS and the narratives array
 */
export function loadJoinedNarrativesSuccess(narratives) {
  return {
    type: LOAD_JOINED_SUCCESS,
    narratives,
  };
}


/**
 * Dispatched when retrieving user's joined narratives fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of LOAD_JOINED_FAILURE passing the error
 */
export function loadJoinedNarrativesFailure(error) {
  return {
    type: LOAD_JOINED_FAILURE,
    error,
  };
}
