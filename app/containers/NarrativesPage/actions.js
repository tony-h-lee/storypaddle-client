/*
 *
 * NarrativesPage actions
 *
 */

import {
  GET_NARRATIVES_REQUEST,
  GET_NARRATIVES_SUCCESS,
  GET_NARRATIVES_FAILURE,
  GET_MORE_NARRATIVES_REQUEST,
  GET_MORE_NARRATIVES_SUCCESS,
  GET_MORE_NARRATIVES_FAILURE,
  SET_CREATED_NARRATIVE,
  UNSET_DELETED_NARRATIVE,
  SET_GENRE_FILTER,
} from './constants';

/**
 * Dispatched on Narratives Page init
 *
 * @param  {string} -> pagination : The string to order the narratives by
 *
 * @return {object} : An action object with a type of GET_NARRATIVES_REQUEST
 */
export function getNarratives(pagination) {
  return {
    type: GET_NARRATIVES_REQUEST,
    pagination,
  };
}


/**
 * Dispatched when successfully retrieves narratives
 *
 * @param  {array} -> narratives : A list of public narratives
 *
 * @return {object} : An action object with a type of GET_NARRATIVES_SUCCESS and the narratives array
 */
export function getNarrativesSuccess(narratives) {
  return {
    type: GET_NARRATIVES_SUCCESS,
    narratives,
  };
}


/**
 * Dispatched when retrieving public narratives fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of GET_NARRATIVES_FAILURE passing the error
 */
export function getNarrativesFailure(error) {
  return {
    type: GET_NARRATIVES_FAILURE,
    error,
  };
}


/**
 * Dispatched on Narratives Page infinite scroll
 *
 * @param  {string} -> next : Cursor for next page narratives
 *
 * @return {object} : An action object with a type of GET_MORE_NARRATIVES_REQUEST and the next cursor string
 */
export function getMoreNarratives(next) {
  return {
    type: GET_MORE_NARRATIVES_REQUEST,
    next,
  };
}


/**
 * Dispatched when successfully retrieves infinite scroll narratives
 *
 * @param  {array} -> narratives : A list of public narratives
 *
 * @return {object} : An action object with a type of GET_MORE_NARRATIVES_SUCCESS and the narratives array
 */
export function getMoreNarrativesSuccess(narratives) {
  return {
    type: GET_MORE_NARRATIVES_SUCCESS,
    narratives,
  };
}


/**
 * Dispatched when retrieving public infinite scroll narratives fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of GET_MORE_NARRATIVES_FAILURE passing the error
 */
export function getMoreNarrativesFailure(error) {
  return {
    type: GET_MORE_NARRATIVES_FAILURE,
    error,
  };
}


/**
 * Dispatched when a user successfully creates a narrative
 *
 * @param  {object} -> narrative : Narrative object successfully created by the user
 *
 * @return {object} : An action object with a type of SET_CREATED_NARRATIVE and the narrative object.
 */
export function setCreatedNarrativeList(narrative) {
  return {
    type: SET_CREATED_NARRATIVE,
    narrative,
  };
}


/**
 * Dispatched when a user successfully deletes a narrative
 *
 * @param  {string} -> narrative : The id of the Narrative that a user successfully deletes.
 *
 * @return {object} : An action object with a type of UNSET_DELETED_NARRATIVE and the narrative id string.
 */
export function unsetDeletedNarrativeList(narrative) {
  return {
    type: UNSET_DELETED_NARRATIVE,
    narrative,
  };
}


/**
 * Set the filter string to filter narrative genres
 *
 * @param  {string} -> genre : The string of the genre to filter.
 *
 * @return {object} : An action object with a type of UNSET_DELETED_NARRATIVE and the genre string.
 */
export function setGenreFilter(genre) {
  return {
    type: SET_GENRE_FILTER,
    genre,
  };
}
