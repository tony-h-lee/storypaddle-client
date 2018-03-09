import { call, takeLatest } from 'redux-saga/effects';
import {
  UNSET_AUTH,
} from './constants';

function* handleLogoutSaga() {
  yield call(() => localStorage.removeItem('nl_token'));
}

function* logoutWatcherSaga() {
  yield takeLatest(UNSET_AUTH, handleLogoutSaga); // see details what is REQUEST param below
}

export default logoutWatcherSaga;
