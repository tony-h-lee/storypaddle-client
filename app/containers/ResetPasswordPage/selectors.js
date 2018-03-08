import { createSelector } from 'reselect';

/**
 * Direct selector to the resetPasswordPage state domain
 */
const selectResetPasswordPageDomain = (state) => state.get('resetPasswordPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ResetPasswordPage
 */

const makeSelectResetPasswordPage = () => createSelector(
  selectResetPasswordPageDomain,
  (substate) => substate
);

export default makeSelectResetPasswordPage;
export {
  selectResetPasswordPageDomain,
};
