import { call, takeLatest, put, fork, apply } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';
import history from 'history';
import { getEditNarrativesErrors } from 'utils/errorCode';
import {
  GET_NARRATIVE_REQUEST,
} from './constants';
import {
  getNarrativeSuccess,
  getNarrativeFailure,
  editNarrative,
} from './actions';
import * as api from './api';

function* handleGetNarrative(action) {
  const { id } = action;
  try {
    const response = yield call(api.getNarrative, { id });
    yield put(getNarrativeSuccess(response));
  } catch (error) {
    yield put(getNarrativeFailure(error.message));
  }
}

function* handleEditNarrativeSaga(action) {
  const form = action.payload.form.toJS();
  const token = action.payload.token;
  const narrative = action.payload.narrative;

  try {
    yield call(api.editNarrative, { ...form, narrative }, token); // calling our api method
    yield put(editNarrative.success());

    yield apply(history, history.push, [`/narrative/${narrative}`]);
  } catch (error) {
    yield put(editNarrative.failure(getEditNarrativesErrors(error.message ? error.message : error)));
  }
}

function* handleGetNarrativeSaga() {
  yield takeLatest(GET_NARRATIVE_REQUEST, handleGetNarrative);
}

function* editNarrativeWatcherSaga() {
  yield takeLatest(editNarrative.REQUEST, handleEditNarrativeSaga); // see details what is REQUEST param below
}

export function* rootSaga() {
  yield [
    fork(formActionSaga),
    fork(handleGetNarrativeSaga),
    fork(editNarrativeWatcherSaga),
  ];
}

export default rootSaga;
