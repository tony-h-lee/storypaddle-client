/*
 *
 * NarrativesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_NARRATIVES_REQUEST,
  GET_NARRATIVES_SUCCESS,
  GET_NARRATIVES_FAILURE,
  UNSET_DELETED_NARRATIVE,
} from './constants';

const initialState = fromJS({
  narratives: false,
  loading: false,
  error: false,
  next: false,
  previous: false,
  hasNext: false,
  hasPrevious: false,
});

function narrativesPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NARRATIVES_REQUEST:
      return state
        .set('loading', true)
        .set('next', false)
        .set('previous', false)
        .set('hasNext', false)
        .set('hasPrevious', false)
        .set('error', false);
    case GET_NARRATIVES_SUCCESS:
      return state
        .set('loading', false)
        .set('hasNext', action.narratives.hasNext)
        .set('hasPrevious', action.narratives.hasPrevious)
        .set('next', action.narratives.next)
        .set('previous', action.narratives.previous)
        .set('narratives', fromJS(action.narratives.results));
    case GET_NARRATIVES_FAILURE:
      return state
        .set('next', false)
        .set('hasNext', false)
        .set('hasPrevious', false)
        .set('previous', false)
        .set('loading', false)
        .set('error', action.error);
    case UNSET_DELETED_NARRATIVE:
      return state
        .update('narratives', (narratives) =>
          narratives.filter((narrative) => narrative.id !== action.narrative));
    default:
      return state;
  }
}

export default narrativesPageReducer;
