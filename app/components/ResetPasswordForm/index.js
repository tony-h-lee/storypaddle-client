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
import { reduxForm } from 'redux-form/immutable';
import FormButton from 'components/FormButton';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { required, password } from 'components/FormValidation/syncValidation';
import { reset } from 'containers/ResetPasswordPage/actions';

function ResetPasswordForm(props) {
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
      onSubmit={handleSubmit(reset)}
      error={error !== false}
    >
      <SemanticField
        name="passwordOld"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Old Password"
        type="password"
        icon="lock"
        validate={[required, password]}
      />
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
        name="passwordConfirm"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Confirm New Password"
        type="password"
        icon="lock"
        validate={[required, password]}
      />

      {error && (
        <Message
          error
          content={error}
        />)
      }

      <FormButton
        primary
        fluid
        size="large"
        loading={loading}
        disabled={pristine || loading}
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
};

export default compose(
  reduxForm({
    form: 'resetForm',
    enableReinitialize: true,
  })
)(ResetPasswordForm);
