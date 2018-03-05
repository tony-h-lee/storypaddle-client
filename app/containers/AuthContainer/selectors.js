import { createSelector } from 'reselect';

/**
 * Direct selector to the authContainer state domain
 */
const selectAuthContainerDomain = (state) => state.get('auth');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AuthContainer
 */

const makeSelectAuthContainer = () => createSelector(
  selectAuthContainerDomain,
  (substate) => substate
);

export default makeSelectAuthContainer;
export {
  selectAuthContainerDomain,
};
