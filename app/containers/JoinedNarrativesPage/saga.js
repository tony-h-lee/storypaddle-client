import { call, takeLatest, put, fork } from 'redux-saga/effects';
import { unsetJoinedNarrative } from 'containers/AuthContainer/actions';
import { leaveNarrative } from 'containers/NarrativeOverviewPage/actions';
import { close } from 'containers/ConfirmModal/actions';
import {
  LOAD_JOINED_REQUEST,
  LEAVE_NARRATIVE_REQUEST,
} from './constants';
import {
  loadJoinedNarrativesSuccess,
  loadJoinedNarrativesFailure,
  leaveNarrativeSuccess,
  leaveNarrativeFailure,
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

function* handleLeaveNarrative(action) {
  const { token, narrative, roleId } = action;
  try {
    yield call(api.leaveNarrative, { token, narrative });
    yield [
      put(leaveNarrativeSuccess(narrative)),
      put(unsetJoinedNarrative(narrative)),
      put(leaveNarrative(roleId)),
      put(close()),
    ];
  } catch (error) {
    yield put(leaveNarrativeFailure(error));
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
