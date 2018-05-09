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
        _error: 'Failed to fetch. Please try again later',
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
        _error: 'Failed to fetch. Please try again later',
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
        _error: 'Failed to fetch. Please try again later',
      });
  }
};


export const getChangePasswordErrors = (code) => {
  switch (code) {
    case 404:
      return new SubmissionError({
        _error: 'This account does not exist',
      });
    case 401:
      return new SubmissionError({
        _error: 'Your current password is incorrect',
      });
    case 400:
      return new SubmissionError({
        _error: 'Invalid password fields submitted. Please enter a new password',
      });
    default:
      return new SubmissionError({
        _error: 'Failed to fetch. Please try again later',
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
        _error: 'Failed to fetch. Please try again later',
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
        _error: 'Failed to fetch. Please try again later',
      });
  }
};

export const getEditNarrativesErrors = (code) => {
  switch (code) {
    case 401:
      return new SubmissionError({
        _error: 'Authentication required',
      });
    case 404:
      return new SubmissionError({
        _error: 'This narrative no longer exists',
      });
    case 400:
      return new SubmissionError({
        _error: 'Please ensure you have filled all required filled accordingly',
      });
    default:
      return new SubmissionError({
        _error: 'Failed to fetch. Please try again later',
      });
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


export const postCommentErrors = (code) => {
  switch (code) {
    case 400:
      return {
        message: 'You have inputted invalid text',
      };
    case 401:
      return {
        message: 'Authentication required',
      };
    case 404:
      return {
        message: 'This Narrative no longer exists',
      };
    default:
      return 'Failed to fetch. Please try again later';
  }
};


export const deleteCommentErrors = (code) => {
  switch (code) {
    case 401:
      return {
        message: 'Authentication required',
      };
    case 404:
      return {
        message: 'This Narrative no longer exists',
      };
    default:
      return 'Failed to fetch. Please try again later';
  }
};


export const updateCommentErrors = (code) => {
  switch (code) {
    case 401:
      return new SubmissionError({
        _error: 'Authentication required',
      });
    case 404:
      return new SubmissionError({
        _error: 'This narrative no longer exists',
      });
    case 400:
      return new SubmissionError({
        _error: 'Please ensure that the text contains no invalid characters',
      });
    default:
      return new SubmissionError({
        _error: 'Failed to fetch. Please try again later',
      });
  }
};
