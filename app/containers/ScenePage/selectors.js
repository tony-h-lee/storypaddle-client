import { createSelector } from 'reselect';

/**
 * Direct selector to the scenePage state domain
 */
const selectScenePageDomain = (state) => state.get('scenePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ScenePage
 */

const makeSelectScenePage = () => createSelector(
  selectScenePageDomain,
  (substate) => substate
);

export default makeSelectScenePage;
export {
  selectScenePageDomain,
};
