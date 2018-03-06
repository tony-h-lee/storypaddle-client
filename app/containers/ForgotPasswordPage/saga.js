import { take, call, put, cancel, takeLatest, fork, apply } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import formActionSaga from 'redux-form-saga';
import { history } from 'app';
import { getForgotPasswordErrors } from 'utils/errorCode';
import { setAuth } from 'containers/AuthContainer/actions';
import * as api from './api';
import {
  forgotPassword,
} from './actions';

function* forgotPasswordWatcherSaga() {
  yield takeLatest(forgotPassword.REQUEST, handleForgotPasswordSaga); // see details what is REQUEST param below
}

function* handleForgotPasswordSaga(action) {
  const email = action.payload.get('email');

  try {
    const response = yield call(api.forgotPassword, { email }); // calling our api method
    yield [put(forgotPassword.success()), put(setAuth(response.token, response.user))];

    // Set token and user from response data
    console.log(response);
    yield apply(history, history.push, ['/reset-password']);
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
