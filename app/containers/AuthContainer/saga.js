import { call, takeLatest, apply } from 'redux-saga/effects';
import history from 'history';
import {
  UNSET_AUTH,
} from './constants';

function* handleLogoutSaga() {
  yield call(() => localStorage.removeItem('nl_token'));
  yield apply(history, history.push, ['/']);
}

function* logoutWatcherSaga() {
  yield takeLatest(UNSET_AUTH, handleLogoutSaga); // see details what is REQUEST param below
}

export default logoutWatcherSaga;
