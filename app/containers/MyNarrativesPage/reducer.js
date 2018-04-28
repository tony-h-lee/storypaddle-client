/*
 *
 * MyNarrativesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  MY_NARRATIVES_REQUEST,
  MY_NARRATIVES_SUCCESS,
  MY_NARRATIVES_FAILURE,
  DELETE_NARRATIVE_REQUEST,
  DELETE_NARRATIVE_SUCCESS,
  DELETE_NARRATIVE_FAILURE,
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

function myNarrativesPageReducer(state = initialState, action) {
  switch (action.type) {
    case MY_NARRATIVES_REQUEST:
      return state
        .set('loading', true)
        .set('hasNext', false)
        .set('hasPrevious', false)
        .set('next', false)
        .set('previous', false)
        .set('error', false);
    case MY_NARRATIVES_SUCCESS:
      return state
        .set('loading', false)
        .set('hasNext', action.narratives.hasNext)
        .set('hasPrevious', action.narratives.hasPrevious)
        .set('next', action.narratives.next)
        .set('previous', action.narratives.previous)
        .set('narratives', fromJS(action.narratives.results));
    case MY_NARRATIVES_FAILURE:
      return state
        .set('loading', false)
        .set('hasNext', false)
        .set('hasPrevious', false)
        .set('next', false)
        .set('previous', false)
        .set('error', action.error);
    case DELETE_NARRATIVE_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case DELETE_NARRATIVE_SUCCESS:
      return state
        .set('loading', false)
        .update('narratives', (narratives) =>
          narratives.filter((narrative) => narrative.get('id') !== action.narrative));
    case DELETE_NARRATIVE_FAILURE:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default myNarrativesPageReducer;
