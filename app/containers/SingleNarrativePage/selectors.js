import { createSelector } from 'reselect';

/**
 * Direct selector to the singleNarrativePage state domain
 */
const selectSingleNarrativePageDomain = (state) => state.get('singleNarrativePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SingleNarrativePage
 */

const makeSelectSingleNarrativePage = () => createSelector(
  selectSingleNarrativePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectSingleNarrativePage;
export {
  selectSingleNarrativePageDomain,
};
