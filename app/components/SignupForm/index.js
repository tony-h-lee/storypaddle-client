/**
 *
 * SignupForm
 *
 */

import React from 'react';
import {
  Form,
  Message,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import FormButton from 'components/FormButton';
import { compose } from 'redux';
import { reduxForm } from 'redux-form/immutable';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { required, email, validate, password } from 'components/FormValidation/syncValidation';
import { signup } from 'containers/SignupPage/actions';

function SignupForm(props) {
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
      onSubmit={handleSubmit(signup)}
      error={error !== false}
    >
      <SemanticField
        name="email"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Email"
        type="email"
        icon="user"
        iconPosition="left"
        validate={[required, email]}
      />
      <SemanticField
        name="password"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Password"
        type="password"
        icon="lock"
        iconPosition="left"
        validate={[required, password]}
      />
      <SemanticField
        name="confirmPassword"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Confirm Password"
        type="password"
        icon="lock"
        iconPosition="left"
        validate={required}
      />

      {error && (
        <Message
          size="tiny"
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
        Sign Up
      </FormButton>
    </Form>
  );
}

SignupForm.propTypes = {
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
    form: 'signupForm',
    enableReinitialize: true,
    validate,
  })
)(SignupForm);
