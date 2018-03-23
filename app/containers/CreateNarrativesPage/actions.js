/*
 *
 * CreateNarrativesPage actions
 *
 */

import { createFormAction } from 'redux-form-saga';
import {
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  CREATE_NARRATIVE_SUCCESS,
  CREATE_NARRATIVE_FAILURE,
} from './constants';

/**
 * Add a character box on the Create Narratives Form
 *
 * @return {object} : An action object with a type of ADD_CHARACTER
 */
export function addCharacter() {
  return {
    type: ADD_CHARACTER,
  };
}

/**
 * Remove the most recently added character box on the Create Narratives Form
 *
 * @return {object} : An action object with a type of REMOVE_CHARACTER
 */
export function removeCharacter() {
  return {
    type: REMOVE_CHARACTER,
  };
}


/**
 * Post request to create a Narrative
 */
export const createNarrative = createFormAction('CREATE_NARRATIVE');

/**
 * Dispatched when server createNarrative succeeds
 *
 * @return {object} : An action object with a type of CREATE_NARRATIVE_SUCCESS
 */
export function createNarrativeSuccess() {
  return {
    type: CREATE_NARRATIVE_SUCCESS,
  };
}


/**
 * Dispatched when server createNarrative fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of CREATE_NARRATIVE_ERROR passing the error
 */
export function createNarrativeFailure(error) {
  return {
    type: CREATE_NARRATIVE_FAILURE,
    error,
  };
}
