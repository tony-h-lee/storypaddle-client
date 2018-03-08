/**
*
* LoginForm
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
import { required, email, password } from 'components/FormValidation/syncValidation';
import { login } from 'containers/LoginPage/actions';

function LoginForm(props) {
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
      onSubmit={handleSubmit(login)}
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
      <SemanticField
        name="password"
        component={SemanticFormField}
        as={Form.Input}
        placeholder="Password"
        type="password"
        icon="lock"
        validate={[required, password]}
      />

      {error && (
        <Message
          size="tiny"
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
        Log In
      </FormButton>
    </Form>
  );
}

LoginForm.propTypes = {
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
    form: 'loginForm',
    enableReinitialize: true,
  })
)(LoginForm);
