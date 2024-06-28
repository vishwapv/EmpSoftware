import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the details state domain
 */

const selectDetailsDomain = state => state.details || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Details
 */

const makeSelectDetails = () =>
  createSelector(
    selectDetailsDomain,
    substate => substate,
  );

const makeSelectFormData = () =>
  createSelector(
    selectFormDomain,
    substate => substate.formResponse,
  );

export default makeSelectDetails;
export { selectDetailsDomain, makeSelectFormData };
