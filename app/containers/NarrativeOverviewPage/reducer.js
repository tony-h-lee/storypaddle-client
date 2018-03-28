/*
 *
 * NarrativeOverviewPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_NARRATIVE_REQUEST,
  GET_NARRATIVE_SUCCESS,
  GET_NARRATIVE_FAILURE,
} from './constants';

const initialState = fromJS({
  narrative: false,
  loading: false,
  error: false,
});

function narrativeOverviewPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NARRATIVE_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case GET_NARRATIVE_SUCCESS:
      return state
        .set('loading', false)
        .set('narrative', action.narrative);
    case GET_NARRATIVE_FAILURE:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default narrativeOverviewPageReducer;
