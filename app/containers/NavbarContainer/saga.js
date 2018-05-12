import { call, takeLatest, put, fork } from 'redux-saga/effects';
import {
  SEARCH_REQUEST,
} from './constants';
import {
  searchSuccess,
  searchFailure,
} from './actions';
import * as api from './api';

function* handleSearch(action) {
  const { next, previous, text } = action;
  try {
    const response = yield call(api.search, { next, previous, text });
    yield put(searchSuccess(response));
  } catch (error) {
    yield put(searchFailure(error.message ? error.message : error));
  }
}

function* handleSearchSaga() {
  yield takeLatest(SEARCH_REQUEST, handleSearch);
}

export function* rootSaga() {
  yield [
    fork(handleSearchSaga),
  ];
}

export default rootSaga;
