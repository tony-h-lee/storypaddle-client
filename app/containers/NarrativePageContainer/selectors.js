import { createSelector } from 'reselect';

/**
 * Direct selector to the narrativePageContainer state domain
 */
const selectNarrativePageContainerDomain = (state) => state.get('narrativePageContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NarrativePageContainer
 */

const makeSelectNarrativePageContainer = () => createSelector(
  selectNarrativePageContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectNarrativePageContainer;
export {
  selectNarrativePageContainerDomain,
};
