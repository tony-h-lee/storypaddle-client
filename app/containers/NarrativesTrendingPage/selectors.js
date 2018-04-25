import { createSelector } from 'reselect';

/**
 * Direct selector to the narrativesTrendingPage state domain
 */
const selectNarrativesTrendingPageDomain = (state) => state.get('narrativesTrendingPage');
const selectNarratives = (state) => state.getIn(['narrativesTrendingPage', 'narratives']);
const getFilter = (state) => state.getIn(['narrativesTrendingPage', 'filter']);

/**
 * Other specific selectors
 */


/**
 * Default selector used by NarrativesTrendingPage
 */

const makeSelectNarrativesTrendingPage = () => createSelector(
  selectNarrativesTrendingPageDomain,
  (substate) => substate
);

const makeSelectNarrativesList = () => createSelector(
  getFilter,
  selectNarratives,
  (filter, narratives) =>
    narratives.filter((narrative) => ((filter && (narrative.genre === filter)) || !filter))
);

export default makeSelectNarrativesTrendingPage;
export {
  selectNarrativesTrendingPageDomain,
  makeSelectNarrativesList,
};
