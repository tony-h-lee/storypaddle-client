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
