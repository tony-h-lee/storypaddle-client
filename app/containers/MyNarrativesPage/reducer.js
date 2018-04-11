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
        .set('narratives', action.narratives);
    case MY_NARRATIVES_FAILURE:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default myNarrativesPageReducer;
