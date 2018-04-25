import { call, takeLatest, put, fork } from 'redux-saga/effects';
import {
  GET_NARRATIVES_REQUEST,
  GET_MORE_NARRATIVES_REQUEST,
} from './constants';
import {
  getNarrativesSuccess,
  getNarrativesFailure,
  getMoreNarrativesSuccess,
  getMoreNarrativesFailure,
} from './actions';
import * as api from './api';

function* handleGetNarratives(action) {
  const { pagination } = action;
  try {
    const response = yield call(api.getTrendingNarratives, { pagination });
    yield put(getNarrativesSuccess(response, {}));
  } catch (error) {
    yield put(getNarrativesFailure(error.message ? error.message : error));
  }
}

function* handleGetMoreNarratives(action) {
  const { next } = action;
  try {
    const response = yield call(api.getTrendingNarratives, { next });
    yield put(getMoreNarrativesSuccess(response));
  } catch (error) {
    yield put(getMoreNarrativesFailure(error.message ? error.message : error));
  }
}

function* handleGetNarrativesSaga() {
  yield takeLatest(GET_NARRATIVES_REQUEST, handleGetNarratives);
}

function* handleGetMoreNarrativesSaga() {
  yield takeLatest(GET_MORE_NARRATIVES_REQUEST, handleGetMoreNarratives);
}

export function* rootSaga() {
  yield [
    fork(handleGetNarrativesSaga),
    fork(handleGetMoreNarrativesSaga),
  ];
}

export default rootSaga;
