import { createSelector } from 'reselect';

/**
 * Direct selector to the narrativesPage state domain
 */
const selectNarrativesPageDomain = (state) => state.get('narrativesPage');
const selectNarratives = (state) => state.getIn(['narrativesPage', 'narratives']);
const getFilter = (state) => state.getIn(['narrativesPage', 'filter']);

/**
 * Other specific selectors
 */


/**
 * Default selector used by NarrativesPage
 */

const makeSelectNarrativesPage = () => createSelector(
  selectNarrativesPageDomain,
  (substate) => substate
);

const makeSelectNarrativesList = () => createSelector(
  getFilter,
  selectNarratives,
  (filter, narratives) =>
    narratives.filter((narrative) => ((filter && (narrative.genre === filter)) || !filter))
);

export default makeSelectNarrativesPage;
export {
  selectNarrativesPageDomain,
  makeSelectNarrativesList,
};
