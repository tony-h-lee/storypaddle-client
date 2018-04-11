import { createSelector } from 'reselect';

/**
 * Direct selector to the myNarrativesPage state domain
 */
const selectMyNarrativesPageDomain = (state) => state.get('myNarrativesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MyNarrativesPage
 */

const makeSelectMyNarrativesPage = () => createSelector(
  selectMyNarrativesPageDomain,
  (substate) => substate
);

export default makeSelectMyNarrativesPage;
export {
  selectMyNarrativesPageDomain,
};
