/* eslint-disable import/prefer-default-export */
import { takeLatest, takeEvery, call, put, select } from 'redux-saga/effects';
// import axios from "axios";
// import { apiBase } from "../../client/config";
import { SAVE_USER_INFOR, GET_USER_INFOR } from '../actions/user';
import { post, get, puts, deletes } from '../../api/index';

// watcher saga: watches for actions dispatched to the store, starts worker saga

function getUserInforAPI() {
  const api = '/api/test';
  return get(api);
}

function* getUserInfor() {
  try {
    const response = yield call(getUserInforAPI);
    if (response && response.status === 200 && response.data) {
      yield put({
        type: SAVE_USER_INFOR,
        data: { username: response.data.username },
      });
    } else {
      yield null;
    }
  } catch (error) {
    yield null;
  }
}

export function* getUserInforSaga() {
  yield takeEvery(GET_USER_INFOR, getUserInfor);
}
