import { SubmissionError } from 'redux-form/immutable';

export const getSignupErrors = (code) => {
  switch (code) {
    case 409:
      return new SubmissionError({
        email: 'There is already an account under this email',
        _error: 'Failed to sign up. Please try again',
      });
    case 400:
      return new SubmissionError({
        _error: 'Invalid fields. Please ensure correct inputs',
      });
    case 401:
      return new SubmissionError({
        _error: 'Database error. Please try again later',
      });
    default:
      return new SubmissionError({
        _error: 'Sign up connection error',
      });
  }
};


export const getLoginErrors = (code) => {
  switch (code) {
    case 401:
      return new SubmissionError({
        _error: 'Incorrect credentials',
      });
    case 400:
      return new SubmissionError({
        _error: 'Invalid email or password requirements',
      });
    default:
      return new SubmissionError({
        _error: 'Log in connection error',
      });
  }
};
