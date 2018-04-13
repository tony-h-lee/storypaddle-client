import { createSelector } from 'reselect';

/**
 * Direct selector to the editNarrativesPage state domain
 */
const selectEditNarrativesPageDomain = (state) => state.get('editNarrativesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditNarrativesPage
 */

const makeSelectEditNarrativesPage = () => createSelector(
  selectEditNarrativesPageDomain,
  (substate) => substate
);

export default makeSelectEditNarrativesPage;
export {
  selectEditNarrativesPageDomain,
};
