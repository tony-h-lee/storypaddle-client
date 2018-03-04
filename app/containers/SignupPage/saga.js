import { take, call, put, cancel, takeLatest, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { SubmissionError } from 'redux-form';
import * as api from './api';
import { SIGNUP_REQUEST } from './constants';
import {
  signupSuccess,
  signupError,
} from './actions';

function* signupWatcherSaga() {
  yield takeLatest(SIGNUP_REQUEST, handleSignupSaga); // see details what is REQUEST param below
}

function* handleSignupSaga(action) {
  const email = action.values.get('email');
  const password = action.values.get('password');

  try {
    yield call(api.signup, { email, password }); // calling our api method
    // it should return promise
    // promise should be resolved if login successfull
    // or rejected if login credentials is wrong

    // so if apiClient promise resolved, then we can notify our form about successful response
    yield put(signupSuccess());
    // do something else here ...
  } catch (error) {
    // if apiClient promise rejected, then we will be here
    // we need mark form as failed and pass errors to it
    const formError = new SubmissionError({
      login: 'User with this login is not found', // specific field error
      _error: 'Sign up failed! Please try again.', // global form error
    });

    yield put(signupError(formError));
  }
}


export function* rootSaga() {
  const sagas = [
    yield fork(signupWatcherSaga),
  ];

  const tasks = yield sagas;

  yield take(LOCATION_CHANGE);
  yield tasks.map((task) => cancel(task));
}

export default rootSaga;
