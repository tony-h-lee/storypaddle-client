import { call, put, takeLatest, fork } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';
import { getForgotPasswordErrors } from 'utils/errorCode';
import * as api from './api';
import {
  forgotPassword,
} from './actions';

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

function* forgotPasswordWatcherSaga() {
  yield takeLatest(forgotPassword.REQUEST, handleForgotPasswordSaga); // see details what is REQUEST param below
}

export function* rootSaga() {
  yield fork(formActionSaga);
  yield fork(forgotPasswordWatcherSaga);
}

export default rootSaga;
