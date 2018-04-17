import { call, takeLatest, put, fork } from 'redux-saga/effects';
import { close } from 'containers/ConfirmModal/actions';
import { unsetCreatedNarrative } from 'containers/AuthContainer/actions';
import {
  MY_NARRATIVES_REQUEST,
  DELETE_NARRATIVE_REQUEST,
} from './constants';
import {
  loadMyNarrativesSuccess,
  loadMyNarrativesFailure,
  deleteNarrativeSuccess,
  deleteNarrativeFailure,
} from './actions';
import * as api from './api';

function* handleLoadMyNarratives(action) {
  const { token } = action;
  try {
    const response = yield call(api.getMyNarratives, { token });
    yield put(loadMyNarrativesSuccess(response));
  } catch (error) {
    yield put(loadMyNarrativesFailure((error.message ? error.message : error)));
  }
}

function* handleDeleteNarrative(action) {
  const { token, narrative } = action;
  try {
    yield call(api.deleteNarrative, { token, narrative });
    yield [
      put(deleteNarrativeSuccess(narrative)),
      put(unsetCreatedNarrative(narrative)),
      put(close()),
    ];
  } catch (error) {
    yield [
      put(deleteNarrativeFailure((error.message ? error.message : error))),
      put(close()),
    ];
  }
}

function* handleLoadMyNarrativesSaga() {
  yield takeLatest(MY_NARRATIVES_REQUEST, handleLoadMyNarratives);
}

function* handleDeleteNarrativeSaga() {
  yield takeLatest(DELETE_NARRATIVE_REQUEST, handleDeleteNarrative);
}

export function* rootSaga() {
  yield fork(handleLoadMyNarrativesSaga);
  yield fork(handleDeleteNarrativeSaga);
}

export default rootSaga;
