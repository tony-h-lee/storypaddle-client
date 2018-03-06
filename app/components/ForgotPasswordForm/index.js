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

function ForgotPasswordForm(props) {
  const {
    handleSubmit,
    loading,
    pristine,
    error,
  } = props;
  return (
    <Form
      size="large"
      style={{ marginBottom: '1rem' }}
      onSubmit={handleSubmit((values) => console.log(values))}
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

      <FormButton
        positive
        fluid
        size="large"
        loading={loading}
        disabled={pristine || loading}
      >
        Send Email
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
};

export default compose(
  reduxForm({
    form: 'forgotPasswordForm',
    enableReinitialize: true,
  })
)(ForgotPasswordForm);
