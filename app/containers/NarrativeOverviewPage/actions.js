/*
 *
 * NarrativeOverviewPage actions
 *
 */

import {
  GET_NARRATIVE_REQUEST,
  GET_NARRATIVE_SUCCESS,
  GET_NARRATIVE_FAILURE,
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
