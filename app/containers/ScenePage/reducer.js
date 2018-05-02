/*
 *
 * ScenePage reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  GET_SCENE_REQUEST,
  GET_SCENE_SUCCESS,
  GET_SCENE_FAILURE,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  GET_MORE_COMMENTS_REQUEST,
  GET_MORE_COMMENTS_SUCCESS,
  GET_MORE_COMMENTS_FAILURE,
  POST_NARRATION_COMMENT_SUCCESS,
  POST_NARRATION_COMMENT_FAILURE,
} from './constants';

const initialState = fromJS({
  scene: false,
  comments: false,
  loading: false,
  error: false,
  commentsLoading: false,
  commentsError: false,
  moreLoading: false,
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
        .set('comments', List([]))
        .set('scene', false)
        .set('commentsLoading', false)
        .set('commentsError', false)
        .set('error', false);
    case GET_SCENE_SUCCESS:
      return state
        .set('loading', false)
        .set('scene', fromJS(action.scene));
    case GET_SCENE_FAILURE:
      return state
        .set('error', action.error)
        .set('comments', List([]))
        .set('scene', false)
        .set('commentsLoading', false)
        .set('commentsError', false)
        .set('loading', false);
    case GET_COMMENTS_REQUEST:
      return state
        .set('comments', false)
        .set('commentsLoading', true)
        .set('hasNext', false)
        .set('hasPrevious', false)
        .set('next', false)
        .set('previous', false)
        .set('commentsError', false);
    case GET_COMMENTS_SUCCESS:
      return state
        .set('commentsLoading', false)
        .set('hasNext', action.comments.hasNext)
        .set('hasPrevious', action.comments.hasPrevious)
        .set('next', action.comments.next)
        .set('previous', action.comments.previous)
        .set('comments', List(action.comments.results).reverse());
    case GET_COMMENTS_FAILURE:
      return state
        .set('comments', false)
        .set('commentsLoading', false)
        .set('hasNext', false)
        .set('hasPrevious', false)
        .set('next', false)
        .set('previous', false)
        .set('commentsError', action.error);
    case GET_MORE_COMMENTS_REQUEST:
      return state
        .set('moreLoading', true)
        .set('commentsError', false);
    case GET_MORE_COMMENTS_SUCCESS:
      return state
        .set('moreLoading', false)
        .set('hasNext', action.comments.hasNext)
        .set('hasPrevious', action.comments.hasPrevious)
        .set('next', action.comments.next)
        .set('previous', action.comments.previous)
        .update('comments', (comments) => List(action.comments.results).concat(comments));
    case GET_MORE_COMMENTS_FAILURE:
      return state
        .set('moreLoading', false)
        .set('commentsError', action.error);
    case POST_NARRATION_COMMENT_SUCCESS:
      return state
        .update('comments', (comments) => comments.push(action.payload));
    case POST_NARRATION_COMMENT_FAILURE:
      return state
        .set('commentsError', action.payload.error);
    default:
      return state;
  }
}

export default scenePageReducer;
