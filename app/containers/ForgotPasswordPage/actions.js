/*
 *
 * ForgotPasswordPage actions
 *
 */

import { createFormAction } from 'redux-form-saga';
import {
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from './constants';

/**
 * Request email containing auth token for password reset
 */
export const forgotPassword = createFormAction('FORGOT_PASSWORD');

/**
 * Dispatched when server email send succeeds
 *
 * @return {object} : An action object with a type of FORGOT_PASSWORD_SUCCESS
 */
export function forgotPasswordSuccess() {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
}


/**
 * Dispatched when server email send fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of LOGIN_ERROR passing the error
 */
export function forgotPasswordFailure(error) {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    error,
  };
}
