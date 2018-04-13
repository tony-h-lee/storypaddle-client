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
  JOIN_NARRATIVE_REQUEST,
  JOIN_NARRATIVE_SUCCESS,
  JOIN_NARRATIVE_FAILURE,
  LEAVE_NARRATIVE,
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
    case JOIN_NARRATIVE_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case JOIN_NARRATIVE_SUCCESS:
      return state
        .set('loading', false)
        .updateIn(['narrative', 'roles'], (roles) => roles.map((role) => {
          if (role.get('id') === action.roleId) return role.set('user', action.user);
          return role;
        })
      );
    case LEAVE_NARRATIVE:
      return state
        .set('loading', false)
        .updateIn(['narrative', 'roles'], (roles) => roles.map((role) => {
          if (role.get('id') === action.roleId) return role.set('user', null);
          return role;
        })
      );
    case JOIN_NARRATIVE_FAILURE:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default narrativeOverviewPageReducer;
