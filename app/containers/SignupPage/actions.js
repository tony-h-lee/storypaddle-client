/*
 *
 * SignupPage actions
 *
 */

import { createFormAction } from 'redux-form-saga';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from './constants';

/**
 * Create Noble Loot account request via redux form immutable
 */
export const signup = createFormAction('SIGNUP');

/**
 * Dispatched when server signup succeeds
 *
 * @return {object} : An action object with a type of SIGNUP_SUCCESS
 */
export function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS,
  };
}


/**
 * Dispatched when server signup fails
 *
 * @param  {object} -> error : The error obtained by the saga
 *
 * @return {object} : An action object with a type of SIGNUP_ERROR passing the error
 */
export function signupFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    error,
  };
}
