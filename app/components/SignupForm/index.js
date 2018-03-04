/**
 *
 * SignupForm
 *
 */

import React from 'react';
import {
  Form,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import FormButton from 'components/FormButton';
import { compose } from 'redux';
import { reduxForm } from 'redux-form/immutable';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { required, email, validate } from 'components/FormValidation/syncValidation';

function SignupForm(props) {
  const {
    handleSubmit,
    onSubmit,
    submitting,
    pristine,
  } = props;
  return (
    <Form
      size="large"
      style={{ marginBottom: '1rem' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <SemanticField
        name="email"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Email"
        type="email"
        icon="user"
        validate={[required, email]}
      />
      <SemanticField
        name="password"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Password"
        type="password"
        icon="lock"
        validate={required}
      />
      <SemanticField
        name="confirmPassword"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Confirm Password"
        type="password"
        icon="lock"
        validate={required}
      />

      <FormButton
        positive
        fluid
        size="large"
        loading={submitting}
        disabled={pristine || submitting}
      >
        Sign Up
      </FormButton>
    </Form>
  );
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default compose(
  reduxForm({
    form: 'signupForm',
    enableReinitialize: true,
    validate,
  })
)(SignupForm);
