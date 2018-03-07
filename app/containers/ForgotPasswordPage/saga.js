import { take, call, put, cancel, takeLatest, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import formActionSaga from 'redux-form-saga';
import { getForgotPasswordErrors } from 'utils/errorCode';
import * as api from './api';
import {
  forgotPassword,
} from './actions';

function* forgotPasswordWatcherSaga() {
  yield takeLatest(forgotPassword.REQUEST, handleForgotPasswordSaga); // see details what is REQUEST param below
}

function* handleForgotPasswordSaga(action) {
  const email = action.payload.get('email');
  const link = '/reset-password';

  try {
    yield call(api.forgotPassword, { email, link }); // calling our api method
    yield put(forgotPassword.success());

    // Set token and user from response data
  } catch (error) {
    yield put(forgotPassword.failure(getForgotPasswordErrors(error)));
  }
}


export function* rootSaga() {
  const sagas = [
    yield fork(formActionSaga),
    yield fork(forgotPasswordWatcherSaga),
  ];

  const tasks = yield sagas;

  yield take(LOCATION_CHANGE);
  yield tasks.map((task) => cancel(task));
}

export default rootSaga;
