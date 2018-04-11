import { call, takeLatest, put, fork } from 'redux-saga/effects';
import {
  MY_NARRATIVES_REQUEST,
} from './constants';
import {
  loadMyNarrativesSuccess,
  loadMyNarrativesFailure,
} from './actions';
import * as api from './api';

function* handleLoadMyNarratives(action) {
  const { token } = action;
  try {
    const response = yield call(api.getMyNarratives, { token });
    yield put(loadMyNarrativesSuccess(response));
  } catch (error) {
    yield put(loadMyNarrativesFailure(error));
  }
}


function* handleLoadMyNarrativesSaga() {
  yield takeLatest(MY_NARRATIVES_REQUEST, handleLoadMyNarratives);
}

export function* rootSaga() {
  yield fork(handleLoadMyNarrativesSaga);
}

export default rootSaga;
