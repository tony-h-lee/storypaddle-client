/*
 *
 * MyNarrativesPage actions
 *
 */

import {
  MY_NARRATIVES_REQUEST,
  MY_NARRATIVES_SUCCESS,
  MY_NARRATIVES_FAILURE,
  DELETE_NARRATIVE_REQUEST,
  DELETE_NARRATIVE_SUCCESS,
  DELETE_NARRATIVE_FAILURE,
} from './constants';

/**
 * Dispatched on My Narratives Page init
 *
 * @param  {string} -> token : The access token retrieved from auth
 *
 * @return {object} : An action object with a type of MY_NARRATIVES_REQUEST and token string
 */
export function loadMyNarratives(token) {
  return {
    type: MY_NARRATIVES_REQUEST,
    token,
  };
}


/**
 * Dispatched when successfully retrieved user's created narratives
 *
 * @param  {array} -> narratives : A list of user's my narratives
 *
 * @return {object} : An action object with a type of MY_NARRATIVES_SUCCESS and the narratives array
 */
export function loadMyNarrativesSuccess(narratives) {
  return {
    type: MY_NARRATIVES_SUCCESS,
    narratives,
  };
}


/**
 * Dispatched when retrieving user's created narratives fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of MY_NARRATIVES_FAILURE passing the error
 */
export function loadMyNarrativesFailure(error) {
  return {
    type: MY_NARRATIVES_FAILURE,
    error,
  };
}


/**
 * User requests to delete a narrative
 *
 * @param  {string} -> token : The access token retrieved from auth
 * @param  {string} -> narrative : The id of the narrative to delete
 *
 * @return {object} : An action object with a type of DELETE_NARRATIVE_REQUEST and token string and narrative id
 */
export function deleteNarrative(token, narrative) {
  return {
    type: DELETE_NARRATIVE_REQUEST,
    token,
    narrative,
  };
}


/**
 * Dispatched when user successfully deletes narrative
 *
 * @param  {string} -> narrative : The id of the narrative that was deleted
 *
 * @return {object} : An action object with a type of DELETE_NARRATIVE_SUCCESS
 */
export function deleteNarrativeSuccess(narrative) {
  return {
    type: DELETE_NARRATIVE_SUCCESS,
    narrative,
  };
}


/**
 * Dispatched when deleting a user narrative fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of DELETE_NARRATIVE_FAILURE passing the error
 */
export function deleteNarrativeFailure(error) {
  return {
    type: DELETE_NARRATIVE_FAILURE,
    error,
  };
}
