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
        .set('loading', true)
        .set('error', false);
    case LOAD_JOINED_SUCCESS:
      return state
        .set('loading', false)
        .set('narratives', action.narratives);
    case LOAD_JOINED_FAILURE:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default joinedNarrativesPageReducer;
