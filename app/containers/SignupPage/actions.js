/*
 *
 * SignupPage actions
 *
 */

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './constants';

/**
 * The mentor submits a signup request
 *
 * @param  {object} -> values : Contains input values from the form
 *
 * @return {object} : An action object with a type of SIGNUP_REQUEST passing the form values
 */
export function signup(values) {
  return {
    type: SIGNUP_REQUEST,
    values,
  };
}


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
export function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    error,
  };
}
