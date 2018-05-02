import { call, takeLatest, put, fork } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';
import { postCommentErrors } from 'utils/errorCode';
import {
  GET_SCENE_REQUEST,
  GET_COMMENTS_REQUEST,
  GET_MORE_COMMENTS_REQUEST,
} from './constants';
import {
  getSceneSuccess,
  getSceneFailure,
  getSceneCommentsSuccess,
  getSceneCommentsFailure,
  getMoreSceneCommentsSuccess,
  getMoreSceneCommentsFailure,
  postNarrationComment,
} from './actions';
import * as api from './api';

function* handleGetScene(action) {
  const { id } = action;
  try {
    const response = yield call(api.getScene, { id });
    yield put(getSceneSuccess(response));
  } catch (error) {
    yield put(getSceneFailure((error.message ? error.message : error)));
  }
}

function* handleGetComments(action) {
  const { id } = action;
  try {
    const response = yield call(api.getComments, { id });
    yield put(getSceneCommentsSuccess(response));
  } catch (error) {
    yield put(getSceneCommentsFailure((error.message ? error.message : error)));
  }
}

function* handleGetMoreComments(action) {
  const { id, next, previous } = action;
  try {
    const response = yield call(api.getComments, { id, next, previous });
    yield put(getMoreSceneCommentsSuccess(response));
  } catch (error) {
    yield put(getMoreSceneCommentsFailure((error.message ? error.message : error)));
  }
}

function* handlePostNarrationComment(action) {
  const form = { ...action.payload.form.toJS(), type: action.payload.type, scene: action.payload.sceneId };
  const token = action.payload.token;
  try {
    const response = yield call(api.postNarrationComment, { ...form }, token); // calling our api method
    yield put(postNarrationComment.success(response));
  } catch (error) {
    yield put(postNarrationComment.failure(postCommentErrors(error.message ? error.message : error)));
  }
}

function* handleGetSceneSaga() {
  yield takeLatest(GET_SCENE_REQUEST, handleGetScene);
}

function* handleGetCommentsSaga() {
  yield takeLatest(GET_COMMENTS_REQUEST, handleGetComments);
}

function* handleGetMoreCommentsSaga() {
  yield takeLatest(GET_MORE_COMMENTS_REQUEST, handleGetMoreComments);
}

function* handlePostNarrationSaga() {
  yield takeLatest(postNarrationComment.REQUEST, handlePostNarrationComment);
}


export function* rootSaga() {
  yield [
    fork(formActionSaga),
    fork(handleGetSceneSaga),
    fork(handleGetCommentsSaga),
    fork(handleGetMoreCommentsSaga),
    fork(handlePostNarrationSaga),
  ];
}

export default rootSaga;
