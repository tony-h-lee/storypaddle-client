import { call, put, takeLatest, fork } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';
import { getChangePasswordErrors } from 'utils/errorCode';
import * as api from './api';
import {
  changePassword,
} from './actions';

function* handleChangePasswordSaga(action) {
  const email = action.payload.email;
  const oldPassword = action.payload.oldPassword;
  const password = action.payload.password;
  const userId = action.payload.userId;

  try {
    yield call(api.changePassword, { password, userId, email, oldPassword });
    yield put(changePassword.success());
  } catch (error) {
    yield put(changePassword.failure(getChangePasswordErrors(error)));
  }
}

function* changePasswordWatcherSaga() {
  yield takeLatest(changePassword.REQUEST, handleChangePasswordSaga); // see details what is REQUEST param below
}

export function* rootSaga() {
  yield fork(formActionSaga);
  yield fork(changePasswordWatcherSaga);
}

export default rootSaga;
