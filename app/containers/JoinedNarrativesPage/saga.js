import { call, takeLatest, put, fork } from 'redux-saga/effects';
import {
  LOAD_JOINED_REQUEST,
} from './constants';
import {
  loadJoinedNarrativesSuccess,
  loadJoinedNarrativesFailure,
} from './actions';
import * as api from './api';

function* handleLoadJoinedNarratives(action) {
  const { token } = action;
  try {
    const response = yield call(api.getJoinedNarratives, { token });
    yield put(loadJoinedNarrativesSuccess(response));
  } catch (error) {
    yield put(loadJoinedNarrativesFailure(error));
  }
}


function* handleLoadJoinedNarrativesSaga() {
  yield takeLatest(LOAD_JOINED_REQUEST, handleLoadJoinedNarratives);
}

export function* rootSaga() {
  yield fork(handleLoadJoinedNarrativesSaga);
}

export default rootSaga;
