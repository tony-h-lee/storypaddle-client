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
  const { id, userId } = action;
  try {
    const response = yield call(api.getScene, { id });
    yield put(getSceneSuccess(response));

    // Retrieve comments for this scene
    try {
      let comments;
      // Get comments on ordering based on if the user is a participant
      // Reverse to display most recent on the bottom
      if (userId && response.narrative.roles !== undefined &&
        response.narrative.roles.some((role) => role.user === userId)) {
        comments = yield call(api.getComments, { id, order: false });
        yield put(getSceneCommentsSuccess(Object.assign({},
          { ...comments },
          { results: comments.results.reverse() })));
      } else {
        comments = yield call(api.getComments, { id, order: true });
        yield put(getSceneCommentsSuccess(comments));
      }
    } catch (error) {
      yield put(getSceneCommentsFailure((error.message ? error.message : error)));
    }
  } catch (error) {
    yield put(getSceneFailure((error.message ? error.message : error)));
  }
}

function* handleGetComments(action) {
  const { id, order } = action;
  try {
    const response = yield call(api.getComments, { id, order });
    yield put(getSceneCommentsSuccess(response));
  } catch (error) {
    yield put(getSceneCommentsFailure((error.message ? error.message : error)));
  }
}

function* handleGetMoreComments(action) {
  const { id, order, next, previous } = action;
  try {
    const response = yield call(api.getMoreComments, { id, next, previous, order });
    // If order is false, then we are requesting a DESC order of pagination since we are a participating user
    // so reverse the results and prepend
    const res = !order ? Object.assign({},
        { ...response },
        { results: response.results.reverse() }) : response;
    yield put(getMoreSceneCommentsSuccess({ ...res, order }));
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
