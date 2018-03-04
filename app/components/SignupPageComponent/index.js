/**
 *
 * SignupPageComponent
 *
 */

import React from 'react';
import { Grid, Container, Image, Header } from 'semantic-ui-react';
import SignupForm from 'components/SignupForm';
import Crown from 'images/crown.png';
// import styled from 'styled-components';


function SignupPageComponent() {
  return (
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450, marginTop: '-2rem' }}>
        <Container>
          <Image src={Crown} size="small" centered />
          <Header> Create your NobleLoot account </Header>
          <SignupForm />
        </Container>
      </Grid.Column>
    </Grid>
  );
}

SignupPageComponent.propTypes = {

};

export default SignupPageComponent;
