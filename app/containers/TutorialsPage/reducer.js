/*
 *
 * TutorialsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_ACCORDION_INDEX,
} from './constants';

const initialState = fromJS({
  activeIndex: 0,
});

function tutorialsPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACCORDION_INDEX:
      return state
        .update('activeIndex', (activeIndex) => activeIndex === action.index ? -1 : action.index);
    default:
      return state;
  }
}

export default tutorialsPageReducer;
