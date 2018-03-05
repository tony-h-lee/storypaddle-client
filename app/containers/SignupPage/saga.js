import { take, call, put, cancel, takeLatest, fork, apply } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SubmissionError } from 'redux-form/immutable';
import formActionSaga from 'redux-form-saga';
import { history } from 'app';
import * as api from './api';
import {
  signup,
} from './actions';

function* signupWatcherSaga() {
  yield takeLatest(signup.REQUEST, handleSignupSaga); // see details what is REQUEST param below
}

function* handleSignupSaga(action) {
  const email = action.payload.get('email');
  const password = action.payload.get('password');

  try {
    const response = yield call(api.signup, { email, password }); // calling our api method
    yield put(signup.success());
    // Set token and user from response data
    console.log(response);
    yield apply(history, history.push, ['/']);
  } catch (error) {
    const formError = new SubmissionError({
      email: 'This email is already taken', // specific field error
      _error: 'Sign up failed! Please try again.', // global form error
    });
    yield put(signup.failure(formError));
  }
}


export function* rootSaga() {
  const sagas = [
    yield fork(formActionSaga),
    yield fork(signupWatcherSaga),
  ];

  const tasks = yield sagas;

  yield take(LOCATION_CHANGE);
  yield tasks.map((task) => cancel(task));
}

export default rootSaga;
