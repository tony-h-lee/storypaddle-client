/**
*
* LoginForm
*
*/

import React from 'react';
import {
  Button,
  Form,
} from 'semantic-ui-react';
import styled from 'styled-components';

const LoginButton = styled(Button)`
  &&& {
    font-family: 'Seymour One', sans-serif;
  }
`;

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

      <LoginButton primary fluid size="large">Login</LoginButton>
    </Form>
  );
}

LoginForm.propTypes = {

};

export default LoginForm;
