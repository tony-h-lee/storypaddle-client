/**
*
* LoginPageComponent
*
*/

import React from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';
import LoginForm from 'components/LoginForm';
import Treasure from 'images/treasure.png';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';


function LoginPageComponent() {
  return (
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450, marginTop: '-2rem' }}>
        <Container>
          <Image src={Treasure} size="large" style={{ marginBottom: '0.8rem' }} />
          <LoginForm />
          <Link to={'/reset-password'}>
            Forgot your password?
          </Link>
        </Container>
      </Grid.Column>
    </Grid>
  );
}

LoginPageComponent.propTypes = {

};

export default LoginPageComponent;
