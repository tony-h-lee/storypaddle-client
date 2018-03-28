import { createSelector } from 'reselect';

/**
 * Direct selector to the narrativeOverviewPage state domain
 */
const selectNarrativeOverviewPageDomain = (state) => state.get('narrativeOverviewPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NarrativeOverviewPage
 */

const makeSelectNarrativeOverviewPage = () => createSelector(
  selectNarrativeOverviewPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectNarrativeOverviewPage;
export {
  selectNarrativeOverviewPageDomain,
};
