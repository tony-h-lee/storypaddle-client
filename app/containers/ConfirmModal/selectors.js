import { createSelector } from 'reselect';

/**
 * Direct selector to the confirmModal state domain
 */
const selectConfirmModalDomain = (state) => state.get('confirmModal');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ConfirmModal
 */

const makeSelectConfirmModal = () => createSelector(
  selectConfirmModalDomain,
  (substate) => substate.toJS()
);

export default makeSelectConfirmModal;
export {
  selectConfirmModalDomain,
};
