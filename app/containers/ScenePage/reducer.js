/*
 *
 * ScenePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  narrative: false,
  comments: false,
  loading: false,
  error: false,
});

function scenePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default scenePageReducer;
