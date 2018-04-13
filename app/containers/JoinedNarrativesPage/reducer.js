/*
 *
 * JoinedNarrativesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_JOINED_REQUEST,
  LOAD_JOINED_SUCCESS,
  LOAD_JOINED_FAILURE,
  LEAVE_NARRATIVE_REQUEST,
  LEAVE_NARRATIVE_SUCCESS,
  LEAVE_NARRATIVE_FAILURE,
} from './constants';

const initialState = fromJS({
  narratives: false,
  loading: false,
  error: false,
});

function joinedNarrativesPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_JOINED_REQUEST:
      return state
        .set('narratives', false)
        .set('loading', true)
        .set('error', false);
    case LOAD_JOINED_SUCCESS:
      return state
        .set('loading', false)
        .set('narratives', fromJS(action.narratives));
    case LOAD_JOINED_FAILURE:
      return state
        .set('narratives', false)
        .set('loading', false)
        .set('error', action.error);
    case LEAVE_NARRATIVE_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case LEAVE_NARRATIVE_SUCCESS:
      return state
        .set('loading', false)
        .update('narratives', (narratives) =>
          narratives.filter((narrative) => narrative.get('id') !== action.narrative));
    case LEAVE_NARRATIVE_FAILURE:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default joinedNarrativesPageReducer;
