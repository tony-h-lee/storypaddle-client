import { call, put, takeLatest, fork, apply } from 'redux-saga/effects';
import formActionSaga from 'redux-form-saga';
import history from 'history';
import { getCreateNarrativesErrors } from 'utils/errorCode';
import { setCreatedNarrativeNewList } from 'containers/NarrativesNewPage/actions';
import * as api from './api';
import {
  createNarrative,
} from './actions';

function* handleCreateNarrativeSaga(action) {
  const form = action.payload.form.toJS();
  const token = action.payload.token;

  try {
    const response = yield call(api.createNarrative, { ...form }, token); // calling our api method
    yield [
      put(createNarrative.success()),
      put(setCreatedNarrativeNewList(response)),
    ];
    yield apply(history, history.push, [`/narrative/${response.id}`]);
  } catch (error) {
    yield put(createNarrative.failure(getCreateNarrativesErrors(error.message ? error.message : error)));
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
