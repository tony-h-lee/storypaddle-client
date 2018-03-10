import { call, put, takeLatest, fork, apply } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';
import { history } from 'app';
import { getSignupErrors } from 'utils/errorCode';
import { setAuth } from 'containers/AuthContainer/actions';
import * as api from './api';
import {
  signup,
} from './actions';

function* handleSignupSaga(action) {
  const email = action.payload.get('email');
  const password = action.payload.get('password');

  try {
    const response = yield call(api.signup, { email, password }); // calling our api method
    yield [put(signup.success()), put(setAuth(response.token, response.user))];
    localStorage.setItem('nl_token', response.token);
    yield apply(history, history.push, ['/']);
  } catch (error) {
    yield put(signup.failure(getSignupErrors(error)));
  }
}

function* signupWatcherSaga() {
  yield takeLatest(signup.REQUEST, handleSignupSaga); // see details what is REQUEST param below
}

export function* rootSaga() {
  yield fork(formActionSaga);
  yield fork(signupWatcherSaga);
}

export default rootSaga;
