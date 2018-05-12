/*
 *
 * NavbarContainer actions
 *
 */

import {
  SET_SEARCH,
  CLEAR_SEARCH,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './constants';

/**
 * Set the search text on state
 *
 * @param {string} -> value : The text to match Narrative titles
 *
 * @return {object} : An action object with a type of SET_SEARCH and the text to match
 */
export function setSearch(value) {
  return {
    type: SET_SEARCH,
    value,
  };
}

/**
 * Clear the search text
 *
 * @return {object} : An action object with a type of CLEAR_SEARCH
 */
export function clearSearch() {
  return {
    type: CLEAR_SEARCH,
  };
}

/**
 * Send request to retrieve Narratives based on search text
 *
 * @param {string} -> value : The text to match Narrative titles
 * @param  {string} -> next : The next cursor for the narrative pagination
 * @param  {string} -> previous : The previous cursor for the narrative pagination
 *
 * @return {object} : An action object with a type of SEARCH_REQUEST and the text to match
 */
export function search(value, next, previous) {
  return {
    type: SEARCH_REQUEST,
    value,
    next,
    previous,
  };
}


/**
 * Dispatched when searched Narratives are successfully retrieved
 *
 * @param  {object} -> suggestions : The Narratives that matched the search
 *
 * @return {object} : An action object with a type of GET_SCENE_SUCCESS and the scene object
 */
export function searchSuccess(suggestions) {
  return {
    type: SEARCH_SUCCESS,
    suggestions,
  };
}


/**
 * Dispatched when Scene failed to retrieve
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of GET_SCENE_FAILURE passing the error
 */
export function searchFailure(error) {
  return {
    type: SEARCH_FAILURE,
    error,
  };
}
