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
  /*
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  */
} from './constants';

/**
 * Send request to retrieve a Scene
 *
 * @param {string} -> id : The id of the Scene to retrieve
 *
 * @return {object} : An action object with a type of GET_SCENE_REQUEST and the id of the Scene
 */
export function getScene(id) {
  return {
    type: GET_SCENE_REQUEST,
    id,
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
 *
 * @return {object} : An action object with a type of GET_SCENE_REQUEST and the id of the Scene
 */
export function getSceneComments(id) {
  return {
    type: GET_COMMENTS_REQUEST,
    id,
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
 *
 * @return {object} : An action object with a type of GET_SCENE_REQUEST and the id of the Scene
 */
export function getMoreSceneComments(id, next, previous) {
  return {
    type: GET_MORE_COMMENTS_REQUEST,
    id,
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

