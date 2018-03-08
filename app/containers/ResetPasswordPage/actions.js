/*
 *
 * ResetPasswordPage actions
 *
 */

import { createFormAction } from 'redux-form-saga';
import {
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from './constants';

/**
 * Request update of user password
 */
export const resetPassword = createFormAction('RESET_PASSWORD');

/**
 * Dispatched when updating user password succeeds
 *
 * @return {object} : An action object with a type of RESET_PASSWORD_SUCCESS
 */
export function resetPasswordSuccess() {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
}


/**
 * Dispatched when updating user password fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of RESET_PASSWORD_FAILURE passing the error
 */
export function resetPasswordFailure(error) {
  return {
    type: RESET_PASSWORD_FAILURE,
    error,
  };
}
