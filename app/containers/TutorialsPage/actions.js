/*
 *
 * TutorialsPage actions
 *
 */

import {
  SET_ACCORDION_INDEX,
} from './constants';

/**
 * Dispatched when user selects an accordion section on the tutorial page
 *
 * @return {object} : An action object with a type of SET_ACCORDION_INDEX and the index of the section selected
 */
export function setAccordionIndex(index) {
  return {
    type: SET_ACCORDION_INDEX,
    index,
  };
}
