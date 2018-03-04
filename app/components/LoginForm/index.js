/**
*
* LoginForm
*
*/

import React from 'react';
import {
  Form,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { reduxForm } from 'redux-form/immutable';
import FormButton from 'components/FormButton';
import SemanticFormField, { SemanticField } from 'components/SemanticFormField';
import { required, email } from 'components/FormValidation/syncValidation';

function LoginForm(props) {
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
        validate={[email, required]}
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
      <FormButton
        primary
        fluid
        size="large"
        loading={submitting}
        disabled={pristine || submitting}
      >
        Log In
      </FormButton>
    </Form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default compose(
  reduxForm({
    form: 'loginForm',
    enableReinitialize: true,
  })
)(LoginForm);
