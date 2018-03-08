import { take, call, put, cancel, takeLatest, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import formActionSaga from 'redux-form-saga';
import { getResetPasswordErrors } from 'utils/errorCode';
import * as api from './api';
import {
  resetPassword,
} from './actions';

function* resetPasswordWatcherSaga() {
  yield takeLatest(resetPassword.REQUEST, handleResetPasswordSaga); // see details what is REQUEST param below
}

function* handleResetPasswordSaga(action) {
  const passwordOld = action.payload.get('passwordOld');
  const password = action.payload.get('password');

  try {
    yield call(api.resetPassword, { passwordOld, password }); // calling our api method
    yield put(resetPassword.success());

    // Set token and user from response data
  } catch (error) {
    yield put(resetPassword.failure(getResetPasswordErrors(error)));
  }
}


export function* rootSaga() {
  const sagas = [
    yield fork(formActionSaga),
    yield fork(resetPasswordWatcherSaga),
  ];

  const tasks = yield sagas;

  yield take(LOCATION_CHANGE);
  yield tasks.map((task) => cancel(task));
}

export default rootSaga;
