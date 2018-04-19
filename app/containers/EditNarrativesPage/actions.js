/*
 *
 * EditNarrativesPage actions
 *
 */

import { createFormAction } from 'redux-form-saga';
import {
  GET_NARRATIVE_REQUEST,
  GET_NARRATIVE_SUCCESS,
  GET_NARRATIVE_FAILURE,
  EDIT_NARRATIVE_SUCCESS,
  EDIT_NARRATIVE_FAILURE,
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
 * @param  {object} -> narrative : The narrative object retrieved from endpoint
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
 * Post request to edit a Narrative
 */
export const editNarrative = createFormAction('EDIT_NARRATIVE');

/**
 * Dispatched when server editNarrative succeeds
 *
 * @return {object} : An action object with a type of EDIT_NARRATIVE_SUCCESS
 */
export function editNarrativeSuccess() {
  return {
    type: EDIT_NARRATIVE_SUCCESS,
  };
}


/**
 * Dispatched when server editNarrative fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of EDIT_NARRATIVE_ERROR passing the error
 */
export function editNarrativeFailure(error) {
  return {
    type: EDIT_NARRATIVE_FAILURE,
    error,
  };
}
