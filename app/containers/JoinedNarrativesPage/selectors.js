import { createSelector } from 'reselect';

/**
 * Direct selector to the joinedNarrativesPage state domain
 */
const selectJoinedNarrativesPageDomain = (state) => state.get('joinedNarrativesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by JoinedNarrativesPage
 */

const makeSelectJoinedNarrativesPage = () => createSelector(
  selectJoinedNarrativesPageDomain,
  (substate) => substate
);

export default makeSelectJoinedNarrativesPage;
export {
  selectJoinedNarrativesPageDomain,
};
