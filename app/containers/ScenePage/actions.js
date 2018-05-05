/*
 *
 * ScenePage actions
 *
 */

import { createFormAction } from 'redux-form-saga';
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
  POST_DIALOGUE_COMMENT_SUCCESS,
  POST_DIALOGUE_COMMENT_FAILURE,
  /*
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  */
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} from './constants';

/**
 * Send request to retrieve a Scene
 *
 * @param {string} -> id : The id of the Scene to retrieve
 * @param {string} -> userId : The id of user
 *
 * @return {object} : An action object with a type of GET_SCENE_REQUEST and the id of the Scene and user
 */
export function getScene(id, userId) {
  return {
    type: GET_SCENE_REQUEST,
    id,
    userId,
  };
}


/**
 * Dispatched when Scene successfully retrieved from api
 *
 * @param  {object} -> scene : The Scene object retrieved from endpoint
 *
 * @return {object} : An action object with a type of GET_SCENE_SUCCESS and the scene object
 */
export function getSceneSuccess(scene) {
  return {
    type: GET_SCENE_SUCCESS,
    scene,
  };
}


/**
 * Dispatched when Scene failed to retrieve
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of GET_SCENE_FAILURE passing the error
 */
export function getSceneFailure(error) {
  return {
    type: GET_SCENE_FAILURE,
    error,
  };
}


/**
 * Send request to retrieve initial comments for a scene
 *
 * @param {string} -> id : The id of the Scene that the comments belong to.
 * @param {bool} -> order : Determine what order of creation date to retrieve comments (true for ASC, false for DESC).
 *
 * @return {object} : An action object with a type of GET_SCENE_REQUEST and the id of the Scene
 */
export function getSceneComments(id, order) {
  return {
    type: GET_COMMENTS_REQUEST,
    id,
    order,
  };
}


/**
 * Dispatched when Scene comments successfully retrieved from api
 *
 * @param  {object} -> scene : The paginated Scene comments object retrieved from endpoint
 *
 * @return {object} : An action object with a type of GET_COMMENTS_SUCCESS and the comments object
 */
export function getSceneCommentsSuccess(comments) {
  return {
    type: GET_COMMENTS_SUCCESS,
    comments,
  };
}


/**
 * Dispatched when comments failed to retrieve
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of GET_COMMENTS_FAILURE passing the error
 */
export function getSceneCommentsFailure(error) {
  return {
    type: GET_COMMENTS_FAILURE,
    error,
  };
}


/**
 * Send request to retrieve paginated comments for a scene
 *
 * @param {string} -> id : The id of the Scene that the comments belong to.
 * @param {bool} -> order : Determine what order of creation date to retrieve comments (true for ASC, false for DESC).
 * @param  {string} -> next : The next cursor for the narrative pagination
 * @param  {string} -> previous : The previous cursor for the narrative pagination
 *
 * @return {object} : An action object with a type of GET_SCENE_REQUEST and the id of the Scene
 */
export function getMoreSceneComments(id, order = true, next, previous) {
  return {
    type: GET_MORE_COMMENTS_REQUEST,
    id,
    order,
    next,
    previous,
  };
}

/**
 * Dispatched when paginated Scene comments successfully retrieved from api
 *
 * @param  {object} -> scene : The paginated Scene comments object retrieved from endpoint
 *
 * @return {object} : An action object with a type of GET_MORE_COMMENTS_SUCCESS and the comments object to prepend
 */
export function getMoreSceneCommentsSuccess(comments) {
  return {
    type: GET_MORE_COMMENTS_SUCCESS,
    comments,
  };
}


/**
 * Dispatched when paginated comments failed to retrieve
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of GET_MORE_COMMENTS_FAILURE passing the error
 */
export function getMoreSceneCommentsFailure(error) {
  return {
    type: GET_MORE_COMMENTS_FAILURE,
    error,
  };
}


/**
 * Post a Narration Comment to a Scene
 */
export const postNarrationComment = createFormAction('POST_NARRATION_COMMENT');

/**
 * Dispatched when posting a Narration Comment succeeds
 *
 * @param  {object} -> comment : The comment object successfully posted to the scene
 *
 * @return {object} : An action object with a type of POST_NARRATION_COMMENT_SUCCESS with the posted comment object
 */
export function postNarrationCommentSuccess(comment) {
  return {
    type: POST_NARRATION_COMMENT_SUCCESS,
    comment,
  };
}


/**
 * Dispatched when posting a Narration Comment fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of POST_NARRATION_COMMENT_FAILURE passing the error
 */
export function postNarrationCommentFailure(error) {
  return {
    type: POST_NARRATION_COMMENT_FAILURE,
    error,
  };
}


/**
 * Post a Dialogue Comment to a Scene
 */
export const postDialogueComment = createFormAction('POST_DIALOGUE_COMMENT');

/**
 * Dispatched when posting a Dialogue Comment succeeds
 *
 * @param  {object} -> comment : The comment object successfully posted to the scene
 *
 * @return {object} : An action object with a type of POST_DIALOGUE_COMMENT_SUCCESS with the posted comment object
 */
export function postDialogueCommentSuccess(comment) {
  return {
    type: POST_DIALOGUE_COMMENT_SUCCESS,
    comment,
  };
}


/**
 * Dispatched when posting a Dialogue Comment fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of POST_DIALOGUE_COMMENT_FAILURE passing the error
 */
export function postDialogueCommentFailure(error) {
  return {
    type: POST_DIALOGUE_COMMENT_FAILURE,
    error,
  };
}


/**
 * Dispatched when user confirms to delete a comment
 *
 * @param  {string} -> token : The access token retrieved from auth
 * @param  {string} -> commentId : The id of the comment that the user requests to delete
 * @param  {string} -> sceneId : The id of the scene this comment belongs to
 *
 * @return {object} : An action object with a type of DELETE_COMMENT_REQUEST and token string and comment and scene id
 */
export function deleteComment(token, commentId, sceneId) {
  return {
    type: DELETE_COMMENT_REQUEST,
    token,
    commentId,
    sceneId,
  };
}


/**
 * Dispatched when user successfully deletes a comment on the ScenePage
 *
 * @param  {string} -> id : The id of the comment that the user successfully deleted
 *
 * @return {object} : An action object with a type of DELETE_COMMENT_SUCCESS and the narrative id string.
 */
export function deleteCommentSuccess(id) {
  return {
    type: DELETE_COMMENT_SUCCESS,
    id,
  };
}


/**
 * Dispatched when deleting a comment fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of DELETE_COMMENT_FAILURE passing the error
 */
export function deleteCommentFailure(error) {
  return {
    type: DELETE_COMMENT_FAILURE,
    error,
  };
}
