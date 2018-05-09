/**
 *
 * ChangePasswordForm
 *
 */

import React from 'react';
import {
  Form,
  Message,
  Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { reduxForm } from 'redux-form/immutable';
import FormButton from 'components/FormButton';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { required, password, validate } from 'components/FormValidation/syncValidation';
import { changePassword } from 'containers/SettingsPage/actions';

function ChangePasswordForm(props) {
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
      style={{ marginBottom: '1rem', maxWidth: '22rem' }}
      onSubmit={handleSubmit((values, dispatch) =>
        changePassword({
          password: values.get('password'),
          oldPassword: values.get('oldPassword'),
          userId: props.userId,
          email: props.email,
        }, dispatch))
      }
      error={error !== false}
    >

      {error && (
        <Message
          size="tiny"
          error
        >
          <Icon name="exclamation circle" />
          {error}
        </Message>)
      }

      {submitSucceeded && (
        <Message
          size="tiny"
          positive
          content={
            <div>
              <p> Password successfully changed! </p>
            </div>
          }
        />)
      }

      <SemanticField
        name="oldPassword"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Current Password"
        type="password"
        icon="lock"
        validate={[required]}
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
        name="confirmPassword"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Confirm New Password"
        type="password"
        icon="lock"
        validate={[required, password]}
      />

      <FormButton
        positive
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

ChangePasswordForm.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  loading: PropTypes.bool,
  email: PropTypes.string,
  submitSucceeded: PropTypes.bool,
};

export default compose(
  reduxForm({
    form: 'changePasswordForm',
    enableReinitialize: true,
    validate,
  })
)(ChangePasswordForm);
