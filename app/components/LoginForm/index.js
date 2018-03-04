/**
*
* LoginForm
*
*/

import React from 'react';
import {
  Form,
} from 'semantic-ui-react';
import FormButton from 'components/FormButton';

function LoginForm() {
  return (
    <Form size="large" style={{ marginBottom: '1rem' }}>
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="Email"
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        type="password"
      />

      <FormButton primary fluid size="large">Log In</FormButton>
    </Form>
  );
}

LoginForm.propTypes = {

};

export default LoginForm;
