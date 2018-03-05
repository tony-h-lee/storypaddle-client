import { take, call, put, cancel, takeLatest, fork, apply } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import formActionSaga from 'redux-form-saga';
import { history } from 'app';
import { getLoginErrors } from 'utils/errorCode';
import * as api from './api';
import {
  login,
} from './actions';

function* loginWatcherSaga() {
  yield takeLatest(login.REQUEST, handleLoginSaga); // see details what is REQUEST param below
}

function* handleLoginSaga(action) {
  const email = action.payload.get('email');
  const password = action.payload.get('password');

  try {
    const response = yield call(api.login, { email, password }); // calling our api method
    yield put(login.success());
    // Set token and user from response data
    console.log(response);
    yield apply(history, history.push, ['/']);
  } catch (error) {
    yield put(login.failure(getLoginErrors(error)));
  }
}


export function* rootSaga() {
  const sagas = [
    yield fork(formActionSaga),
    yield fork(loginWatcherSaga),
  ];

  const tasks = yield sagas;

  yield take(LOCATION_CHANGE);
  yield tasks.map((task) => cancel(task));
}

export default rootSaga;
