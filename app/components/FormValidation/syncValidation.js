const MIN_PASSWORD_LENGTH = 6;

export const required = (value) => (value ? undefined : 'Required');

export const number = (value) => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const email = (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined
);

export const password = (value) => (value.length < MIN_PASSWORD_LENGTH ? 'Password too short' : undefined);

export const validate = (values) => {
  const errors = {};

  if (values.get('password') !== values.get('confirmPassword')) {
    errors.confirmPassword = 'Password does not match';
  }

  return errors;
};
