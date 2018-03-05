/*
 *
 * LoginPage actions
 *
 */

import { createFormAction } from 'redux-form-saga';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';

/**
 * Request authentication for Noble Loot account
 */
export const login = createFormAction('LOGIN');

/**
 * Dispatched when server login succeeds
 *
 * @return {object} : An action object with a type of LOGIN_SUCCESS
 */
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}


/**
 * Dispatched when server login fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of LOGIN_ERROR passing the error
 */
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}
