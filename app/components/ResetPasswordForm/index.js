/**
 *
 * ResetPasswordForm
 *
 */

import React from 'react';
import {
  Form,
  Message,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form/immutable';
import FormButton from 'components/FormButton';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { required, password, validate } from 'components/FormValidation/syncValidation';
import { resetPassword } from 'containers/ResetPasswordPage/actions';

function ResetPasswordForm(props) {
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
      onSubmit={handleSubmit((values, dispatch) =>
        resetPassword({ password: values.get('password'), token: props.token }, dispatch))}
      error={error !== false}
    >
      <SemanticField
        name="password"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="New Password"
        type="password"
        icon="lock"
        validate={[required, password]}
      />
      <SemanticField
        name="confirmPassword"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Confirm New Password"
        type="password"
        icon="lock"
        validate={[required, password]}
      />

      {error && (
        <Message
          size="tiny"
          error
          content={
            <div>
              <p> { error } </p>
              <Link to={'/forgot-password'}> Click here to send a new email </Link>
            </div>
          }
        />)
      }

      {submitSucceeded && (
        <Message
          size="tiny"
          positive
          content={
            <div>
              <p> Password successfully changed! </p>
              <Link to={'/'}> Click here to return to the dashboard </Link>
            </div>
          }
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

ResetPasswordForm.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  loading: PropTypes.bool,
  token: PropTypes.string,
  submitSucceeded: PropTypes.bool,
};

export default compose(
  reduxForm({
    form: 'resetForm',
    enableReinitialize: true,
    validate,
  })
)(ResetPasswordForm);
