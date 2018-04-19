import { MIN_CHARACTERS } from 'containers/CreateNarrativesPage/constants';

const MIN_PASSWORD_LENGTH = 6;

export const required = (value) => (value && value.trim().length > 0 ? undefined : 'Required');

export const number = (value) => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const email = (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined
);

export const password = (value) => (value.length < MIN_PASSWORD_LENGTH ?
  'Password must be at least 6 characters' : undefined);

export const validate = (values) => {
  const errors = {};

  if (values.get('password') !== values.get('confirmPassword')) {
    errors.confirmPassword = 'Password does not match';
  }

  return errors;
};

export const validateRoles = (roles) => {
  if (!roles || roles.size < MIN_CHARACTERS) {
    return 'You must enter at least two roles.';
  }
  return undefined;
};
