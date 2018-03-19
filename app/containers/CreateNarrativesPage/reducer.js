/*
 *
 * CreateNarrativesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_CHARACTER,
  REMOVE_CHARACTER,
} from './constants';

const initialState = fromJS({
  roles: [0, 0],
});

function createNarrativesPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return state
        .update('roles', (roles) => roles.concat(0));
    case REMOVE_CHARACTER:
      return state
        .update('roles', (roles) => roles.pop());
    default:
      return state;
  }
}

export default createNarrativesPageReducer;
