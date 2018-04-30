import { createSelector } from 'reselect';

/**
 * Direct selector to the narrativesNewPage state domain
 */
const selectNarrativesNewPageDomain = (state) => state.get('narrativesNewPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NarrativesNewPage
 */

const makeSelectNarrativesNewPage = () => createSelector(
  selectNarrativesNewPageDomain,
  (substate) => substate
);

export default makeSelectNarrativesNewPage;
export {
  selectNarrativesNewPageDomain,
};
