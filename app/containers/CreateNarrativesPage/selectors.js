import { createSelector } from 'reselect';

/**
 * Direct selector to the createNarrativesPage state domain
 */
const selectCreateNarrativesPageDomain = (state) => state.get('createNarrativesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CreateNarrativesPage
 */

const makeSelectCreateNarrativesPage = () => createSelector(
  selectCreateNarrativesPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectCreateNarrativesPage;
export {
  selectCreateNarrativesPageDomain,
};
