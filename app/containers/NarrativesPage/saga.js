import { call, takeLatest, put, fork } from 'redux-saga/effects';
import {
  GET_NARRATIVES_REQUEST,
} from './constants';
import {
  getNarrativesSuccess,
  getNarrativesFailure,
} from './actions';
import * as api from './api';

function* handleGetNarratives() {
  try {
    const response = yield call(api.getNarratives);
    yield put(getNarrativesSuccess(response));
  } catch (error) {
    yield put(getNarrativesFailure(error.message ? error.message : error));
  }
}

function* handleGetNarrativesSaga() {
  yield takeLatest(GET_NARRATIVES_REQUEST, handleGetNarratives);
}

export function* rootSaga() {
  yield fork(handleGetNarrativesSaga);
}

export default rootSaga;
