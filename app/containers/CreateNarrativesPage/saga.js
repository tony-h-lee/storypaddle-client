import { call, put, takeLatest, fork, apply } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';
import history from 'history';
import { getCreateNarrativesErrors } from 'utils/errorCode';
import * as api from './api';
import {
  createNarrative,
} from './actions';

function* handleCreateNarrativeSaga(action) {
  const form = action.payload.get('form');

  try {
    const response = yield call(api.createNarrative, { form }); // calling our api method
    yield put(createNarrative.success());
    console.log(response);
    yield apply(history, history.push, ['/']);
  } catch (error) {
    yield put(createNarrative.failure(getCreateNarrativesErrors(error)));
  }
}

function* createNarrativeWatcherSaga() {
  yield takeLatest(createNarrative.REQUEST, handleCreateNarrativeSaga); // see details what is REQUEST param below
}


export function* rootSaga() {
  yield fork(formActionSaga);
  yield fork(createNarrativeWatcherSaga);
}

export default rootSaga;
