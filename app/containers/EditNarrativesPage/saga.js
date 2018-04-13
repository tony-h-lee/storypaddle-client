import { call, takeLatest, put, fork } from 'redux-saga/effects';
import {
  GET_NARRATIVE_REQUEST,
} from './constants';
import {
  getNarrativeSuccess,
  getNarrativeFailure,
} from './actions';
import * as api from './api';

function* handleGetNarrative(action) {
  const { id } = action;
  try {
    const response = yield call(api.getNarrative, { id });
    yield put(getNarrativeSuccess(response));
  } catch (error) {
    yield put(getNarrativeFailure(error.message));
  }
}

function* handleGetNarrativeSaga() {
  yield takeLatest(GET_NARRATIVE_REQUEST, handleGetNarrative);
}


export function* rootSaga() {
  yield fork(handleGetNarrativeSaga);
}

export default rootSaga;
