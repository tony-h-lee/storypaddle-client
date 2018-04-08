/*
 *
 * NarrativeOverviewPage actions
 *
 */

import {
  GET_NARRATIVE_REQUEST,
  GET_NARRATIVE_SUCCESS,
  GET_NARRATIVE_FAILURE,
  JOIN_NARRATIVE_REQUEST,
  JOIN_NARRATIVE_SUCCESS,
  JOIN_NARRATIVE_FAILURE,
} from './constants';

/**
 * Send request to retrieve a Narrative
 *
 * @param {string} -> id : The id of the Narrative to retrieve
 *
 * @return {object} : An action object with a type of GET_NARRATIVE_REQUEST and the id of the Narrative
 */
export function getNarrative(id) {
  return {
    type: GET_NARRATIVE_REQUEST,
    id,
  };
}


/**
 * Dispatched when Narrative successfully retrieved from api
 *
 * @return {object} : An action object with a type of GET_NARRATIVE_SUCCESS and the narrative object
 */
export function getNarrativeSuccess(narrative) {
  return {
    type: GET_NARRATIVE_SUCCESS,
    narrative,
  };
}


/**
 * Dispatched when Narrative failed to retrieve
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of GET_NARRATIVE_FAILURE passing the error
 */
export function getNarrativeFailure(error) {
  return {
    type: GET_NARRATIVE_FAILURE,
    error,
  };
}


/**
 * Send request to join a Narrative as a role
 *
 * @param {string} -> id : The id of the Narrative with the role
 * @param {string} -> name : The name of the role to join.
 * @param {string} -> token : Auth token required to join a role.
 *
 * @return {object} : An action object with a type of GET_NARRATIVE_REQUEST and the name of the
 * role and the Narrative id
 */
export function joinNarrative(id, name, token) {
  return {
    type: JOIN_NARRATIVE_REQUEST,
    id,
    name,
    token,
  };
}


/**
 * Dispatched when user successfully joins a role in a Narrative
 *
 * @param {string} -> name : The name of the role that was joined.
 * @param {string} -> user : The id of the user that joined the role.
 *
 * @return {object} : An action object with a type of JOIN_NARRATIVE_SUCCESS and the name of the role and the user id
 */
export function joinNarrativeSuccess(name, user) {
  return {
    type: JOIN_NARRATIVE_SUCCESS,
    name,
    user,
  };
}


/**
 * Dispatched when user fails to join a role in a Narrative
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of JOIN_NARRATIVE_FAILURE passing the error
 */
export function joinNarrativeFailure(error) {
  return {
    type: JOIN_NARRATIVE_FAILURE,
    error,
  };
}
