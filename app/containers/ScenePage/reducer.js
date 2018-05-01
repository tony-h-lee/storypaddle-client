/*
 *
 * ScenePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_SCENE_REQUEST,
  GET_SCENE_SUCCESS,
  GET_SCENE_FAILURE,
} from './constants';

const initialState = fromJS({
  scene: false,
  comments: false,
  loading: false,
  error: false,
  next: false,
  previous: false,
  hasNext: false,
  hasPrevious: false,
});

function scenePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SCENE_REQUEST:
      return state
        .set('loading', true)
        .set('scene', false)
        .set('error', false);
    case GET_SCENE_SUCCESS:
      return state
        .set('loading', false)
        .set('scene', fromJS(action.scene));
    case GET_SCENE_FAILURE:
      return state
        .set('error', action.error)
        .set('scene', false)
        .set('loading', false);
    default:
      return state;
  }
}

export default scenePageReducer;
