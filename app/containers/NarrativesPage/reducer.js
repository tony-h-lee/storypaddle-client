/*
 *
 * NarrativesPage reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  GET_NARRATIVES_REQUEST,
  GET_NARRATIVES_SUCCESS,
  GET_NARRATIVES_FAILURE,
  GET_MORE_NARRATIVES_REQUEST,
  GET_MORE_NARRATIVES_SUCCESS,
  GET_MORE_NARRATIVES_FAILURE,
  SET_CREATED_NARRATIVE,
  UNSET_DELETED_NARRATIVE,
} from './constants';

const initialState = fromJS({
  narratives: List([]),
  loading: false,
  moreLoading: false,
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
        .set('moreLoading', false)
        .set('next', false)
        .set('previous', false)
        .set('hasNext', false)
        .set('hasPrevious', false)
        .set('error', false);
    case GET_NARRATIVES_SUCCESS:
      return state
        .set('loading', false)
        .set('next', action.narratives.next || false)
        .set('previous', action.narratives.previous || false)
        .set('hasNext', action.narratives.hasNext)
        .set('hasPrevious', action.narratives.hasPrevious)
        .update('narratives', (narratives) => narratives.concat(List(action.narratives.results)));
    case GET_NARRATIVES_FAILURE:
      return state
        .set('next', false)
        .set('moreLoading', false)
        .set('narratives', List([]))
        .set('hasNext', false)
        .set('hasPrevious', false)
        .set('previous', false)
        .set('loading', false)
        .set('error', action.error);
    case GET_MORE_NARRATIVES_REQUEST:
      return state
        .set('moreLoading', true)
        .set('error', false);
    case GET_MORE_NARRATIVES_SUCCESS:
      return state
        .set('moreLoading', false)
        .set('next', action.narratives.next || false)
        .set('previous', action.narratives.previous || false)
        .set('hasNext', action.narratives.hasNext)
        .set('hasPrevious', action.narratives.hasPrevious)
        .update('narratives', (narratives) => narratives.concat(List(action.narratives.results)));
    case GET_MORE_NARRATIVES_FAILURE:
      return state
        .set('next', false)
        .set('narratives', List([]))
        .set('hasNext', false)
        .set('hasPrevious', false)
        .set('previous', false)
        .set('loading', false)
        .set('moreLoading', false)
        .set('error', action.error);
    case SET_CREATED_NARRATIVE:
      return state
        .update('narratives', (narratives) =>
          narratives.insert(0, action.narrative));
    case UNSET_DELETED_NARRATIVE:
      return state
        .update('narratives', (narratives) =>
          narratives.filter((narrative) => narrative.id !== action.narrative));
    default:
      return state;
  }
}

export default narrativesPageReducer;
