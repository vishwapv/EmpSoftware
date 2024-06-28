/*
 *
 * Details reducer
 *
 */
import produce from 'immer';

import {
  DEFAULT_ACTION,
  FORM_REQUEST,
  FORM_SUCCESS,
  FORM_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  success: false,
  error: false,
  formResponse: {},
};

/* eslint-disable default-case, no-param-reassign */
const detailsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case FORM_REQUEST:
        draft.loading = true;
        break;
      case FORM_SUCCESS:
        draft.success = true;
        draft.formResponse = action.payload;
        draft.loading = false;
        break;
      case FORM_ERROR:
        draft.error = action.error;
        draft.success = false;
        draft.loading = false;
        break;
    }
  });

export default detailsReducer;
