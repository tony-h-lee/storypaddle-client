/*
 *
 * EditNarrativesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_NARRATIVE_REQUEST,
  GET_NARRATIVE_SUCCESS,
  GET_NARRATIVE_FAILURE,
  EDIT_NARRATIVE_REQUEST,
  EDIT_NARRATIVE_SUCCESS,
  EDIT_NARRATIVE_FAILURE,
} from './constants';

const initialState = fromJS({
  narrative: false,
  loading: false,
  error: false,
});

function editNarrativesPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NARRATIVE_REQUEST:
      return state
        .set('loading', true)
        .set('narrative', false)
        .set('error', false);
    case GET_NARRATIVE_SUCCESS:
      return state
        .set('loading', false)
        .set('narrative', fromJS(action.narrative));
    case GET_NARRATIVE_FAILURE:
      return state
        .set('error', action.error)
        .set('loading', false);
    case EDIT_NARRATIVE_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case EDIT_NARRATIVE_SUCCESS:
      return state
        .set('loading', false);
    case EDIT_NARRATIVE_FAILURE:
      return state
        .set('error', action.payload.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default editNarrativesPageReducer;
