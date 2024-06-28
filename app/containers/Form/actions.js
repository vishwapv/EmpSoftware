/*
 *
 * Form actions
 *
 */

import {
  DEFAULT_ACTION,
  FORM_REQUEST,
  FORM_SUCCESS,
  FORM_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function formRequest(payload) {
  console.log('Form action request: ', payload);
  return {
    type: FORM_REQUEST,
    payload,
  };
}
export function formSuccess(payload) {
  console.log('Form action success: ', payload);

  return {
    type: FORM_SUCCESS,
    payload,
  };
}
export function formError(error) {
  console.log('Form action error: ', error);
  return {
    type: FORM_ERROR,
    error,
  };
}
