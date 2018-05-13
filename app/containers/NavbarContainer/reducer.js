/*
 *
 * NavbarContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_SEARCH,
  CLEAR_SEARCH,
  CLEAR_INPUT,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './constants';

const initialState = fromJS({
  value: '',
  suggestions: false,
  loading: false,
  error: false,
});

function navbarContainerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH:
      return state
        .set('value', action.value);
    case CLEAR_SEARCH:
      return state
        .set('suggestions', false);
    case CLEAR_INPUT:
      return state
        .set('value', '');
    case SEARCH_REQUEST:
      return state
        .set('loading', true)
        .set('error', false);
    case SEARCH_SUCCESS:
      return state
        .set('suggestions', action.suggestions)
        .set('loading', false);
    case SEARCH_FAILURE:
      return state
        .set('error', action.payload.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default navbarContainerReducer;
