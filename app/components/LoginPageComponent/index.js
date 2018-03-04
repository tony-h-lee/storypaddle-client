/**
*
* LoginPageComponent
*
*/

import React from 'react';
import { Grid, Container, Image, Header } from 'semantic-ui-react';
import LoginForm from 'components/LoginForm';
import Treasure from 'images/treasure.png';
import { Link } from 'react-router-dom';
import { fromJS } from 'immutable';
// import styled from 'styled-components';

const onSubmit = (values) => {
  console.log(fromJS(values));
  return values;
};

function LoginPageComponent() {
  return (
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450, marginTop: '-2rem' }}>
        <Container>
          <Image src={Treasure} size="large" />
          <Header> Log in and start collecting! </Header>
          <LoginForm onSubmit={onSubmit} />
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
