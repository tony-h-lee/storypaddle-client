/**
 *
 * SignupPageComponent
 *
 */

import React from 'react';
import { Grid, Container, Image, Header } from 'semantic-ui-react';
import { fromJS } from 'immutable';
import SignupForm from 'components/SignupForm';
import Crown from 'images/crown.png';
// import styled from 'styled-components';

const signup = (values) => {
  console.log(fromJS(values));
  return values;
};

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
          <SignupForm onSubmit={signup} />
        </Container>
      </Grid.Column>
    </Grid>
  );
}

SignupPageComponent.propTypes = {

};

export default SignupPageComponent;
