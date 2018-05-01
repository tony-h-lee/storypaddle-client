import { call, takeLatest, put, fork } from 'redux-saga/effects';
import {
  GET_SCENE_REQUEST,
} from './constants';
import {
  getSceneSuccess,
  getSceneFailure,
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

function* handleGetSceneSaga() {
  yield takeLatest(GET_SCENE_REQUEST, handleGetScene);
}

export function* rootSaga() {
  yield fork(handleGetSceneSaga);
}

export default rootSaga;
