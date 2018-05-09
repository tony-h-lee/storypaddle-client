/*
 *
 * ChangePasswordPage actions
 *
 */

import { createFormAction } from 'redux-form-saga';
import {
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from './constants';

/**
 * Request update of user password
 */
export const changePassword = createFormAction('CHANGE_PASSWORD');

/**
 * Dispatched when updating user password succeeds
 *
 * @return {object} : An action object with a type of CHANGE_PASSWORD_SUCCESS
 */
export function changePasswordSuccess() {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
  };
}


/**
 * Dispatched when updating user password fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of CHANGE_PASSWORD_FAILURE passing the error
 */
export function changePasswordFailure(error) {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    error,
  };
}
