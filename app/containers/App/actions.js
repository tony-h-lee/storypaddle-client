/*
 *
 * LoginPage actions
 *
 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

/**
 * The mentor submits a login request
 *
 * @param  {string} -> email : The unique email associated with the user account
 * @param  {string} -> password : Account password
 *
 * @return {object} : An action object with a type of LOGIN_REQUEST passing the account details
 */
export function login(email, password) {
  return {
    type: LOGIN_REQUEST,
    email,
    password,
  };
}


/**
 * Dispatched when server login authentication succeeds
 *
 * @return {object} : An action object with a type of LOGIN_SUCCESS
 */
export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}


/**
 * Dispatched when server login authentication fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of LOGIN_ERROR passing the error
 */
export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
