/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/immutable';

import languageProviderReducer from 'containers/LanguageProvider/reducer';


// Blow Away Form Values Constants
import {
  POST_NARRATION_COMMENT_SUCCESS,
  POST_DIALOGUE_COMMENT_SUCCESS,
} from 'containers/ScenePage/constants';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

const formWithClearReducer = formReducer.plugin({
  narrationForm: (state, action) => {
    switch (action.type) {
      case POST_NARRATION_COMMENT_SUCCESS:
        return undefined;
      default:
        return state;
    }
  },
  dialogueForm: (state, action) => {
    switch (action.type) {
      case POST_DIALOGUE_COMMENT_SUCCESS:
        return undefined;
      default:
        return state;
    }
  },
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    form: formWithClearReducer,
    route: routeReducer,
    language: languageProviderReducer,
    ...injectedReducers,
  });
}
