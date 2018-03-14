import { createSelector } from 'reselect';

/**
 * Direct selector to the narrativesPageContainer state domain
 */
const selectNarrativesPageContainerDomain = (state) => state.get('narrativesPageContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NarrativesPageContainer
 */

const makeSelectNarrativesPageContainer = () => createSelector(
  selectNarrativesPageContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectNarrativesPageContainer;
export {
  selectNarrativesPageContainerDomain,
};
