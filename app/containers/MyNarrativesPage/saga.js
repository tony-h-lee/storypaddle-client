import { call, takeLatest, put, fork, apply } from 'redux-saga/effects';
import history from 'history';
import { close } from 'containers/ConfirmModal/actions';
import { unsetDeletedNarrativeList } from 'containers/NarrativesPage/actions';
import {
  MY_NARRATIVES_REQUEST,
  DELETE_NARRATIVE_REQUEST,
} from './constants';
import {
  loadMyNarratives,
  loadMyNarrativesSuccess,
  loadMyNarrativesFailure,
  deleteNarrativeSuccess,
  deleteNarrativeFailure,
} from './actions';
import * as api from './api';

function* handleLoadMyNarratives(action) {
  const { token, author, next, previous } = action;
  try {
    const response = yield call(api.getMyNarratives, { token, author, next, previous });
    yield put(loadMyNarrativesSuccess(response));
  } catch (error) {
    yield put(loadMyNarrativesFailure((error.message ? error.message : error)));
  }
}

function* handleDeleteNarrative(action) {
  const { token, narrative, author } = action;
  try {
    yield call(api.deleteNarrative, { token, narrative });
    yield [
      apply(history, history.push, ['/my-narratives']),
      put(deleteNarrativeSuccess()),
      put(loadMyNarratives(token, author, false, false)),
      put(unsetDeletedNarrativeList(narrative)),
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
