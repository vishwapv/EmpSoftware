import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the form state domain
 */

const selectFormDomain = state => state.form || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Form
 */

const makeSelectForm = () =>
  createSelector(
    selectFormDomain,
    substate => substate,
  );
const makeSelectFormData = () =>
  createSelector(
    selectFormDomain,
    substate => substate.formResponse,
  );

export default makeSelectForm;
export { selectFormDomain, makeSelectFormData };
