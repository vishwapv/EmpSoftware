// import { take, call, put, select } from 'redux-saga/effects';


// import { take, call, put, select } from 'redux-saga/effects';
import { FORM_REQUEST } from './constants';
import { formSuccess, formError } from './actions';
import request from '../../utils/request';
import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { browserRedirect, isSavePermission } from '../../helpers/helpers';

function formSagacall(payload) {
  console.log('response', payload);

  // Ensure payload is an object
  // if (typeof payload !== 'object') {
  //   throw new Error('Payload must be an object');
  // }

  return axios({
    method: 'post', // Correctly specify the method as 'get'
    url: 'http://localhost:4000/api/v0/log/userLogin',
    data: payload, // Pass payload as query parameters
  })
  .then(response => {
    console.log("token checking",response)
    // const tokenResponse = (response.data && response.data.data )
    const token = response.data && response.data.data;

    console.log("token response helper",token.token)
                localStorage.setItem("token", token.token);
                // localStorage.setItem( {token});
                browserRedirect('/dashboard');
            })
            .catch(error => {
                console.log(error);
                console.log(error.response);
                if (error.response.data.e) {
                    toast.error(error.response.data.e);
                }
            })

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
export default function* signInSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FORM_REQUEST, formSagaTableWorking);
}
