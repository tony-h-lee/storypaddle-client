import { call, takeLatest, apply, put, fork } from 'redux-saga/effects';
import history from 'history';
import {
  UNSET_AUTH,
  GET_ME_REQUEST,
} from './constants';
import { getMeSuccess, getMeFailure } from './actions';
import * as api from './api';

function* handleLogoutSaga() {
  yield call(() => localStorage.removeItem('nl_token'));
  yield apply(history, history.push, ['/']);
}

function* handleGetMe(action) {
  try {
    const response = yield call(api.getMe, { token: action.token }); // calling our api method
    yield put(getMeSuccess(response));
  } catch (error) {
    yield put(getMeFailure(error));
    yield call(() => localStorage.removeItem('nl_token'));
  }
}

function* handleGetMeSaga() {
  yield takeLatest(GET_ME_REQUEST, handleGetMe); // see details what is REQUEST param below
}

function* logoutWatcherSaga() {
  yield takeLatest(UNSET_AUTH, handleLogoutSaga); // see details what is REQUEST param below
}

export function* rootSaga() {
  yield fork(handleGetMeSaga);
  yield fork(logoutWatcherSaga);
}

export default rootSaga;
