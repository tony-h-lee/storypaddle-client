import { createSelector } from 'reselect';

/**
 * Direct selector to the narrativeOverviewPageContainer state domain
 */
const selectNarrativeOverviewPageContainerDomain = (state) => state.get('narrativeOverviewPageContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NarrativeOverviewPageContainer
 */

const makeSelectNarrativeOverviewPageContainer = () => createSelector(
  selectNarrativeOverviewPageContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectNarrativeOverviewPageContainer;
export {
  selectNarrativeOverviewPageContainerDomain,
};
