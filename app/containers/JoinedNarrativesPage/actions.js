/*
 *
 * JoinedNarrativesPage actions
 *
 */

import {
  LEAVE_NARRATIVE_REQUEST,
  LEAVE_NARRATIVE_SUCCESS,
  LEAVE_NARRATIVE_FAILURE,
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


/**
 * Dispatched when user confirms leaves a joined narrative item
 *
 * @param  {string} -> token : The access token retrieved from auth
 * @param  {string} -> narrative : The id of the narrative that the user wants to leave
 *
 * @return {object} : An action object with a type of LEAVE_NARRATIVE_REQUEST and token string
 */
export function leaveNarrative(token, narrative) {
  return {
    type: LEAVE_NARRATIVE_REQUEST,
    token,
    narrative,
  };
}


/**
 * Dispatched when successfully leaves a narrative
 *
 * @param  {string} -> narrative : The id of the narrative that was left
 *
 * @return {object} : An action object with a type of LOAD_JOINED_SUCCESS and the narrative id string.
 */
export function leaveNarrativeSuccess(narrative) {
  return {
    type: LEAVE_NARRATIVE_SUCCESS,
    narrative,
  };
}


/**
 * Dispatched when leaving a narrative fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of LEAVE_NARRATIVE_FAILURE passing the error
 */
export function leaveNarrativeFailure(error) {
  return {
    type: LEAVE_NARRATIVE_FAILURE,
    error,
  };
}

