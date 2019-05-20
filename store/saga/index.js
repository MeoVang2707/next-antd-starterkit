// import 'regenerator-runtime/runtime';
import { put, fork, takeLatest, all } from 'redux-saga/effects';
// import formActionSaga from 'redux-form-saga';

import { getUserInforSaga } from './user';

export default function* rootSaga() {
  yield all([
    // authSaga.map(watcher => fork(watcher)),
    getUserInforSaga(),
  ]);
}
