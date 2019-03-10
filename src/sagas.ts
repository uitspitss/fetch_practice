import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { fetchApiSaga } from './actions';
import * as Api from './api';

export function* handleRequestApi(action: any) {
  try {
    const data = yield call(Api.fetchApi, action.payload.url);
    yield put(fetchApiSaga.done(data));
  } catch (error) {
    console.log(error);
    yield put(fetchApiSaga.failed);
  }
}

function* watchRequestApi() {
  yield takeEvery(fetchApiSaga.started.type, handleRequestApi);
}

export default function* rootSaga() {
  yield all([fork(watchRequestApi)]);
}
