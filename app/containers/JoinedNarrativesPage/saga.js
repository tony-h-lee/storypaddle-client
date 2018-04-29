import { call, takeLatest, put, fork, apply } from 'redux-saga/effects';
import history from 'history';
import { leaveNarrative } from 'containers/NarrativeOverviewPage/actions';
import { close } from 'containers/ConfirmModal/actions';
import {
  LOAD_JOINED_REQUEST,
  LEAVE_NARRATIVE_REQUEST,
} from './constants';
import {
  loadJoinedNarratives,
  loadJoinedNarrativesSuccess,
  loadJoinedNarrativesFailure,
  leaveNarrativeSuccess,
  leaveNarrativeFailure,
} from './actions';
import * as api from './api';

function* handleLoadJoinedNarratives(action) {
  const { token, author, next, previous } = action;
  try {
    const response = yield call(api.getJoinedNarratives, { token, author, next, previous });
    yield put(loadJoinedNarrativesSuccess(response));
  } catch (error) {
    yield put(loadJoinedNarrativesFailure(error.message ? error.message : error));
  }
}

function* handleLeaveNarrative(action) {
  const { token, narrative, roleId, author } = action;
  try {
    yield call(api.leaveNarrative, { token, narrative });
    yield [
      apply(history, history.push, ['/joined-narratives']),
      put(leaveNarrativeSuccess()),
      put(loadJoinedNarratives(token, author, false, false)),
      put(leaveNarrative(roleId)),
      put(close()),
    ];
  } catch (error) {
    yield [put(leaveNarrativeFailure(error.message ? error.message : error)), put(close())];
  }
}


function* handleLoadJoinedNarrativesSaga() {
  yield takeLatest(LOAD_JOINED_REQUEST, handleLoadJoinedNarratives);
}

function* handleLeaveNarrativeSaga() {
  yield takeLatest(LEAVE_NARRATIVE_REQUEST, handleLeaveNarrative);
}


export function* rootSaga() {
  yield fork(handleLoadJoinedNarrativesSaga);
  yield fork(handleLeaveNarrativeSaga);
}

export default rootSaga;
