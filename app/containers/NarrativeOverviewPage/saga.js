import { call, takeLatest, put, fork } from 'redux-saga/effects';
import {
  GET_NARRATIVE_REQUEST,
} from './constants';
import { getNarrativeSuccess, getNarrativeFailure } from './actions';
import * as api from './api';

function* handleGetNarrative(action) {
  const { id } = action;
  try {
    const response = yield call(api.getNarrative, { id }); // calling our api method
    yield put(getNarrativeSuccess(response));
  } catch (error) {
    yield put(getNarrativeFailure(error));
  }
}

function* handleGetNarrativeSaga() {
  yield takeLatest(GET_NARRATIVE_REQUEST, handleGetNarrative); // see details what is REQUEST param below
}

export function* rootSaga() {
  yield fork(handleGetNarrativeSaga);
}

export default rootSaga;
