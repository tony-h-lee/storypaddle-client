/*
 *
 * CreateNarrativesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  CREATE_NARRATIVE_REQUEST,
  CREATE_NARRATIVE_SUCCESS,
  CREATE_NARRATIVE_FAILURE,
} from './constants';

const initialState = fromJS({
  roles: [0, 0],
  loading: false,
  error: false,
});

function createNarrativesPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      return state
        .update('roles', (roles) => roles.concat(0));
    case REMOVE_CHARACTER:
      return state
        .update('roles', (roles) => roles.pop());
    case CREATE_NARRATIVE_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case CREATE_NARRATIVE_SUCCESS:
      return state
        .set('loading', false);
    case CREATE_NARRATIVE_FAILURE:
      return state
        .set('error', action.payload.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default createNarrativesPageReducer;
