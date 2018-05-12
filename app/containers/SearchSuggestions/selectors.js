import { createSelector } from 'reselect';

/**
 * Direct selector to the searchSuggestions state domain
 */
const selectSearchSuggestionsDomain = (state) => state.get('searchSuggestions');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchSuggestions
 */

const makeSelectSearchSuggestions = () => createSelector(
  selectSearchSuggestionsDomain,
  (substate) => substate.toJS()
);

export default makeSelectSearchSuggestions;
export {
  selectSearchSuggestionsDomain,
};
