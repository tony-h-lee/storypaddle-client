import { createSelector } from 'reselect';

/**
 * Direct selector to the narrativesPage state domain
 */
const selectNarrativesPageDomain = (state) => state.get('narrativesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NarrativesPage
 */

const makeSelectNarrativesPage = () => createSelector(
  selectNarrativesPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectNarrativesPage;
export {
  selectNarrativesPageDomain,
};
