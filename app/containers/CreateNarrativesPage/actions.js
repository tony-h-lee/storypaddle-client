/*
 *
 * CreateNarrativesPage actions
 *
 */

import {
  ADD_CHARACTER,
  REMOVE_CHARACTER,
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
