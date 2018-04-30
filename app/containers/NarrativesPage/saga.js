import { call, takeLatest, put, fork } from 'redux-saga/effects';
import {
  GET_NARRATIVES_REQUEST,
} from './constants';
import {
  getNarrativesSuccess,
  getNarrativesFailure,
} from './actions';
import * as api from './api';

function* handleGetNarratives(action) {
  const { next, previous } = action;
  try {
    const response = yield call(api.getNarratives, { next, previous });
    yield put(getNarrativesSuccess(response));
  } catch (error) {
    yield put(getNarrativesFailure(error.message ? error.message : error));
  }
}

function* handleGetNarrativesSaga() {
  yield takeLatest(GET_NARRATIVES_REQUEST, handleGetNarratives);
}

export function* rootSaga() {
  yield [
    fork(handleGetNarrativesSaga),
  ];
}

export default rootSaga;
