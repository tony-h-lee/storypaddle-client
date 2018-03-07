/**
 *
 * ForgotPasswordForm
 *
 */

import React from 'react';
import {
  Form,
  Message,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { reduxForm } from 'redux-form/immutable';
import FormButton from 'components/FormButton';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { required, email } from 'components/FormValidation/syncValidation';
import { forgotPassword } from 'containers/ForgotPasswordPage/actions';

function ForgotPasswordForm(props) {
  const {
    handleSubmit,
    loading,
    pristine,
    error,
    submitSucceeded,
  } = props;
  return (
    <Form
      size="large"
      style={{ marginBottom: '1rem' }}
      onSubmit={handleSubmit(forgotPassword)}
      error={error !== false}
    >
      <SemanticField
        name="email"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Email"
        type="email"
        icon="user"
        validate={[email, required]}
      />

      {error && (
        <Message
          error
          content={error}
        />)
      }

      {submitSucceeded && (
        <Message
          positive
          content="Email sent! Please check your email"
        />)
      }

      <FormButton
        positive
        fluid
        size="large"
        loading={loading}
        disabled={pristine || loading || submitSucceeded}
      >
        Submit
      </FormButton>
    </Form>
  );
}

ForgotPasswordForm.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  loading: PropTypes.bool,
  submitSucceeded: PropTypes.bool,
};

export default compose(
  reduxForm({
    form: 'forgotPasswordForm',
    enableReinitialize: true,
  })
)(ForgotPasswordForm);
