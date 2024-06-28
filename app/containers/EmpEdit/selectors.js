import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the empEdit state domain
 */

const selectEmpEditDomain = state => state.empEdit || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EmpEdit
 */

const makeSelectEmpEdit = () =>
  createSelector(
    selectEmpEditDomain,
    substate => substate,
  );

const makeSelectFormData = () =>
  createSelector(
    selectFormDomain,
    substate => substate.formResponse,
  );

export default makeSelectEmpEdit;
export { selectEmpEditDomain, makeSelectFormData };
