import { createSelector } from 'reselect';

/**
 * Direct selector to the narrativesNewPage state domain
 */
const selectNarrativesNewPageDomain = (state) => state.get('narrativesNewPage');
const selectNarratives = (state) => state.getIn(['narrativesNewPage', 'narratives']);
const getFilter = (state) => state.getIn(['narrativesNewPage', 'filter']);

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

const makeSelectNarrativesList = () => createSelector(
  getFilter,
  selectNarratives,
  (filter, narratives) =>
    narratives.filter((narrative) => ((filter && (narrative.genre === filter)) || !filter))
);

export default makeSelectNarrativesNewPage;
export {
  selectNarrativesNewPageDomain,
  makeSelectNarrativesList,
};
