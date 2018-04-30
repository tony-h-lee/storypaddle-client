import { createSelector } from 'reselect';

/**
 * Direct selector to the narrativesTrendingPage state domain
 */
const selectNarrativesTrendingPageDomain = (state) => state.get('narrativesTrendingPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NarrativesTrendingPage
 */

const makeSelectNarrativesTrendingPage = () => createSelector(
  selectNarrativesTrendingPageDomain,
  (substate) => substate
);

export default makeSelectNarrativesTrendingPage;
export {
  selectNarrativesTrendingPageDomain,
};
