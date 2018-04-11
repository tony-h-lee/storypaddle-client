import { call, takeLatest, put, fork, apply } from 'redux-saga/effects';
import history from 'history';
import { getJoinNarrativeErrors } from 'utils/errorCode';
import { setJoinedNarrative } from 'containers/AuthContainer/actions';
import {
  GET_NARRATIVE_REQUEST,
  JOIN_NARRATIVE_REQUEST,
} from './constants';
import {
  getNarrativeSuccess,
  getNarrativeFailure,
  joinNarrativeSuccess,
  joinNarrativeFailure,
} from './actions';
import * as api from './api';

function* handleGetNarrative(action) {
  const { id } = action;
  try {
    const response = yield call(api.getNarrative, { id });
    yield put(getNarrativeSuccess(response));
  } catch (error) {
    yield put(getNarrativeFailure(error));
  }
}

function* handleJoinRole(action) {
  const { narrativeId, roleId, token, user } = action;
  try {
    const response = yield call(api.joinRole, { narrativeId, roleId, token, user });
    yield [put(joinNarrativeSuccess(response)), put(setJoinedNarrative(response.id))];
    yield apply(history, history.push, [`/scene/${narrativeId}`]);
  } catch (error) {
    if (error === 401) yield apply(history, history.push, ['/signup']);
    yield put(joinNarrativeFailure(getJoinNarrativeErrors(roleId, error)));
  }
}

function* handleGetNarrativeSaga() {
  yield takeLatest(GET_NARRATIVE_REQUEST, handleGetNarrative);
}

function* handleJoinRoleSaga() {
  yield takeLatest(JOIN_NARRATIVE_REQUEST, handleJoinRole);
}

export function* rootSaga() {
  yield fork(handleGetNarrativeSaga);
  yield fork(handleJoinRoleSaga);
}

export default rootSaga;
