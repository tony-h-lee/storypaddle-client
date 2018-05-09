import { createSelector } from 'reselect';

/**
 * Direct selector to the tutorialsPage state domain
 */
const selectTutorialsPageDomain = (state) => state.get('tutorialsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TutorialsPage
 */

const makeSelectTutorialsPage = () => createSelector(
  selectTutorialsPageDomain,
  (substate) => substate
);

export default makeSelectTutorialsPage;
export {
  selectTutorialsPageDomain,
};
