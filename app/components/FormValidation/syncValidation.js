export const required = (value) => (value ? undefined : 'Required');

export const number = (value) => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const email = (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]$/i.test(value)
  ? 'Invalid email address'
  : undefined
);

export const validate = (values) => {
  const errors = {};

  if (values.get('password') !== values.get('confirmPassword')) {
    errors.confirmPassword = 'Password does not match';
  }

  return errors;
};
