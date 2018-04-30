/*
 *
 * NarrativesPage actions
 *
 */

import {
  GET_NARRATIVES_REQUEST,
  GET_NARRATIVES_SUCCESS,
  GET_NARRATIVES_FAILURE,
  SET_PAGINATED_FIELD,
  UNSET_DELETED_NARRATIVE,
} from './constants';

/**
 * Dispatched on Trending Narratives Page init
 *
 * @param  {string} -> paginatedField : The paginated field to order the narratives by
 * @param  {string} -> next : The next cursor for the narrative pagination
 * @param  {string} -> previous : The previous cursor for the narrative pagination
 *
 * @return {object} : An action object with a type of GET_NARRATIVES_REQUEST
 */
export function getNarratives(paginatedField, next, previous) {
  return {
    type: GET_NARRATIVES_REQUEST,
    paginatedField,
    next,
    previous,
  };
}


/**
 * Dispatched when successfully retrieves trending narratives
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
 * Dispatched when retrieving public trending narratives fails
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
 * Set the paginated field to sort retrieved narratives
 *
 * @param  {string} -> field : The field to sort the narratives by
 *
 * @return {object} : An action object with a type of SET_PAGINATED_FIELD and the field string.
 */
export function setPaginatedField(field) {
  return {
    type: SET_PAGINATED_FIELD,
    field,
  };
}
