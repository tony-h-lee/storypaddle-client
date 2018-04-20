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
} from './constants';

const initialState = fromJS({
  narratives: false,
  loading: false,
  error: false,
  next: false,
  previous: false,
});

function narrativesPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NARRATIVES_REQUEST:
      return state
        .set('narratives', false)
        .set('next', false)
        .set('previous', false)
        .set('loading', true)
        .set('error', false);
    case GET_NARRATIVES_SUCCESS:
      return state
        .set('loading', false)
        .set('next', action.narratives.next)
        .set('previous', action.narratives.previous)
        .set('narratives', fromJS(action.narratives.results));
    case GET_NARRATIVES_FAILURE:
      return state
        .set('narratives', false)
        .set('next', false)
        .set('previous', false)
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default narrativesPageReducer;
