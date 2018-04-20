/*
 *
 * NarrativesPage actions
 *
 */

import {
  GET_NARRATIVES_REQUEST,
  GET_NARRATIVES_SUCCESS,
  GET_NARRATIVES_FAILURE,
} from './constants';

/**
 * Dispatched on Narratives Page init
 *
 * @return {object} : An action object with a type of GET_NARRATIVES_REQUEST
 */
export function getNarratives() {
  return {
    type: GET_NARRATIVES_REQUEST,
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
