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
      return { error: 'Failed to fetch' };
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
      return { error: 'Failed to fetch' };
  }
};


export const getForgotPasswordErrors = (code) => {
  switch (code) {
    case 400:
      return new SubmissionError({
        _error: 'Failed to send email. Please try again',
      });
    default:
      return { error: 'Failed to fetch' };
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
      return { error: 'Failed to fetch' };
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
      return { error: 'Failed to fetch' };
  }
};

export const getEditNarrativesErrors = (code) => {
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
      return { error: 'Failed to fetch' };
  }
};


export const getJoinNarrativeErrors = (roleId, code) => {
  switch (code) {
    case 401:
      return {
        roleId,
        message: 'Authentication required',
      };
    case 400:
      return {
        roleId,
        message: 'You already have a role in this Narrative!',
      };
    default:
      return {
        roleId,
        message: 'Failed to join Narrative. Please try again later',
      };
  }
};
