/**
 *
 * SignupForm
 *
 */

import React from 'react';
import {
  Form,
} from 'semantic-ui-react';
import FormButton from 'components/FormButton';

function SignupForm() {
  return (
    <Form size="large" style={{ marginBottom: '1rem' }}>
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="Email"
        type="email"
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        type="password"
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Confirm Password"
        type="password"
      />

      <FormButton positive fluid size="large">Sign Up</FormButton>
    </Form>
  );
}

SignupForm.propTypes = {

};

export default SignupForm;
