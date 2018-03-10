import { call, put, takeLatest, fork, apply } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';
import { history } from 'app';
import { getLoginErrors } from 'utils/errorCode';
import { setAuth } from 'containers/AuthContainer/actions';
import * as api from './api';
import {
  login,
} from './actions';

function* handleLoginSaga(action) {
  const email = action.payload.get('email');
  const password = action.payload.get('password');

  try {
    const response = yield call(api.login, { email, password }); // calling our api method
    yield [put(login.success()), put(setAuth(response.token, response.user))];
    localStorage.setItem('nl_token', response.token);
    yield apply(history, history.push, ['/']);
  } catch (error) {
    yield put(login.failure(getLoginErrors(error)));
  }
}

function* loginWatcherSaga() {
  yield takeLatest(login.REQUEST, handleLoginSaga); // see details what is REQUEST param below
}


export function* rootSaga() {
  yield fork(formActionSaga);
  yield fork(loginWatcherSaga);
}

export default rootSaga;
