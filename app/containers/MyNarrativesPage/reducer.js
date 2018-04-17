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
});

function myNarrativesPageReducer(state = initialState, action) {
  switch (action.type) {
    case MY_NARRATIVES_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case MY_NARRATIVES_SUCCESS:
      return state
        .set('loading', false)
        .set('narratives', fromJS(action.narratives));
    case MY_NARRATIVES_FAILURE:
      return state
        .set('loading', false)
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
