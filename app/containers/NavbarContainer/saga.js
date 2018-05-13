import { call, put, fork, throttle } from 'redux-saga/effects';
import {
  SEARCH_REQUEST,
} from './constants';
import {
  searchSuccess,
  searchFailure,
} from './actions';
import * as api from './api';

function* handleSearch(action) {
  const { input } = action;
  try {
    const response = yield call(api.search, { input });
    yield put(searchSuccess(response));
  } catch (error) {
    yield put(searchFailure(error.message ? error.message : error));
  }
}

function* handleSearchSaga() {
  yield throttle(750, SEARCH_REQUEST, handleSearch);
}

export function* rootSaga() {
  yield [
    fork(handleSearchSaga),
  ];
}

export default rootSaga;
