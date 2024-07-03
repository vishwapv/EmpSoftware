// import { take, call, put, select } from 'redux-saga/effects';
import { FORM_REQUEST } from './constants';
import { formSuccess, formError } from './actions';
import request from '../../utils/request';
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import axios from 'axios';

function formSagacall(payload) {
  console.log('response', payload);

  // Ensure payload is an object
  if (typeof payload !== 'object') {
    throw new Error('Payload must be an object');
  }

  return axios({
    method: 'put', // Correctly specify the method as 'get'
    url: 'http://localhost:4000/api/v0/formData/userUpdate',
    data: payload, // Pass payload as query parameters
  });

  return request('get', `https://jsonplaceholder.typicode.com/posts`);
}

export function* formSagaTableWorking(payload) {
  // See example in containers/HomePage/saga.js
  console.log('fetch table details saga works', payload);

  try {
    let response = yield call(formSagacall, payload && payload.payload);
    console.log('fetching table details saga response ', response);
    yield put(formSuccess(response && response.data));
  } catch (err) {
    console.log('fetching table error details', err);
    yield put(formError(err && err.response && err.res));
  }
}
// Individual exports for testing
export default function* empEditSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FORM_REQUEST, formSagaTableWorking);
}
