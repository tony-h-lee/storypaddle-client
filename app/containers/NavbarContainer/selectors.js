import { createSelector } from 'reselect';

/**
 * Direct selector to the navbarContainer state domain
 */
const selectNavbarContainerDomain = (state) => state.get('navbarContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavbarContainer
 */

const makeSelectNavbarContainer = () => createSelector(
  selectNavbarContainerDomain,
  (substate) => substate
);

export default makeSelectNavbarContainer;
export {
  selectNavbarContainerDomain,
};
