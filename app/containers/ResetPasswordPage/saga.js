import { call, put, takeLatest, fork } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';
import { getResetPasswordErrors } from 'utils/errorCode';
import { setAuth } from 'containers/AuthContainer/actions';
import * as api from './api';
import {
  resetPassword,
} from './actions';

function* handleResetPasswordSaga(action) {
  const password = action.payload.password;
  const token = action.payload.token;

  try {
    const response = yield call(api.resetPassword, { password, token }); // calling our api method
    yield [put(resetPassword.success()), put(setAuth(response.token, response.user))];
    localStorage.setItem('nl_token', response.token);
  } catch (error) {
    yield put(resetPassword.failure(getResetPasswordErrors(error)));
  }
}

function* resetPasswordWatcherSaga() {
  yield takeLatest(resetPassword.REQUEST, handleResetPasswordSaga); // see details what is REQUEST param below
}

export function* rootSaga() {
  yield fork(formActionSaga);
  yield fork(resetPasswordWatcherSaga);
}

export default rootSaga;
