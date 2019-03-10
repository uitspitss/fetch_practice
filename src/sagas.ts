import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { fetchApi } from './actions';
import * as Api from './api';

export function* handleRequestApi(action: any) {
  try {
    const data = yield call(Api.fetchApi, action.payload.url);
    yield put(fetchApi.done(data));
  } catch (error) {
    console.log(error);
    yield put(fetchApi.failed);
  }
}

function* watchRequestApi() {
  yield takeEvery(fetchApi.started.type, handleRequestApi);
}

export default function* rootSaga() {
  yield all([fork(watchRequestApi)]);
}
