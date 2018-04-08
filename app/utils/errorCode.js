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
        _error: 'Sign up connection error. Please try again later',
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
        _error: 'Log in connection error. Please try again later',
      });
  }
};


export const getForgotPasswordErrors = (code) => {
  switch (code) {
    case 400:
      return new SubmissionError({
        _error: 'Failed to send email. Please try again',
      });
    default:
      return new SubmissionError({
        _error: 'Error sending reset email. Please try again later',
      });
  }
};


export const getResetPasswordErrors = (code) => {
  switch (code) {
    case 404:
      return new SubmissionError({
        _error: 'Token expired or does not exist. Please request a new email',
      });
    case 400:
      return new SubmissionError({
        _error: 'Invalid password fields submitted. Please enter a new password',
      });
    default:
      return new SubmissionError({
        _error: 'Error requesting password change. Please try again later',
      });
  }
};

export const getCreateNarrativesErrors = (code) => {
  switch (code) {
    case 401:
      return new SubmissionError({
        _error: 'Authentication required',
      });
    case 400:
      return new SubmissionError({
        _error: 'Please ensure you filled all required fields and you have no duplicate role names',
      });
    default:
      return new SubmissionError({
        _error: 'Error creating Narrative. Please try again later',
      });
  }
};


export const getJoinNarrativeErrors = (name, code) => {
  switch (code) {
    case 401:
      return {
        name,
        message: 'Authentication required',
      };
    case 400:
      return {
        name,
        message: 'You already have a role in this Narrative!',
      };
    default:
      return {
        name,
        message: 'Failed to join Narrative. Please try again later',
      };
  }
};
