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
  postDialogueComment,
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
  const form = { ...action.payload.form.toJS(), type: 'narration', scene: action.payload.sceneId };
  const token = action.payload.token;
  try {
    const response = yield call(api.postComment, { ...form }, token); // calling our api method
    yield put(postNarrationComment.success(response));
  } catch (error) {
    yield put(postNarrationComment.failure(postCommentErrors(error.message ? error.message : error)));
  }
}

function* handlePostDialogueComment(action) {
  const form = {
    ...action.payload.form.toJS(),
    type: 'dialogue',
    scene: action.payload.sceneId,
    character: action.payload.character,
  };
  const token = action.payload.token;
  try {
    const response = yield call(api.postComment, { ...form }, token); // calling our api method
    yield put(postDialogueComment.success(response));
  } catch (error) {
    yield put(postDialogueComment.failure(postCommentErrors(error.message ? error.message : error)));
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

function* handlePostCommentSaga() {
  yield takeLatest(postNarrationComment.REQUEST, handlePostNarrationComment);
  yield takeLatest(postDialogueComment.REQUEST, handlePostDialogueComment);
}


export function* rootSaga() {
  yield [
    fork(formActionSaga),
    fork(handleGetSceneSaga),
    fork(handleGetCommentsSaga),
    fork(handleGetMoreCommentsSaga),
    fork(handlePostCommentSaga),
  ];
}

export default rootSaga;
