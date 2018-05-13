/*
 *
 * NavbarContainer actions
 *
 */

import {
  SET_SEARCH,
  CLEAR_SEARCH,
  CLEAR_INPUT,
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
 * Clear the suggestions list
 *
 * @return {object} : An action object with a type of CLEAR_SEARCH
 */
export function clearSearch() {
  return {
    type: CLEAR_SEARCH,
  };
}


/**
 * Clear the search text
 *
 * @return {object} : An action object with a type of CLEAR_INPUT
 */
export function clearInput() {
  return {
    type: CLEAR_INPUT,
  };
}

/**
 * Send request to retrieve Narratives based on search text
 *
 * @param {object} -> input : The object returned from autosuggest containing value and reason
 *
 * @return {object} : An action object with a type of SEARCH_REQUEST and the text to match
 */
export function search(input) {
  return {
    type: SEARCH_REQUEST,
    input,
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
