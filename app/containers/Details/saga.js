// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { FORM_REQUEST } from './constants';
import { formSuccess, formError } from './actions';
import request from '../../utils/request';

function formSagacall(payload) {
  console.log('response', payload);

  // Ensure payload is an object
  // if (typeof payload !== 'object') {
  //   throw new Error('Payload must be an object');
  // }

  return axios({
    method: 'get', // Correctly specify the method as 'get'
    url: 'http://localhost:4000/api/v0/formData/getData',
    data: payload, // Pass payload as query parameters
  });

  return request('get', `https://jsonplaceholder.typicode.com/posts`);
}

export function* formSagaTableWorking(payload) {
  // See example in containers/HomePage/saga.js
  console.log('fetch table details saga works', payload);

  try {
    const response = yield call(formSagacall, payload && payload.data);
    console.log('fetching table details saga response ', response);
    const formDataArray =
      response &&
      response.data &&
      response.data.user &&
      response.data.user.FormData;
    // yield put(formSuccess(response && response.data));
    yield put(formSuccess(formDataArray));
    console.log('data from the backend', formSuccess(response));
  } catch (err) {
    console.log('fetching table error details', err);
    yield put(formError(err && err.response && err.res));
  }
}

// Individual exports for testing
export default function* detailsSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FORM_REQUEST, formSagaTableWorking);
}
