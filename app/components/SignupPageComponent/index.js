/**
 *
 * SignupPageComponent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Image, Header } from 'semantic-ui-react';
import SignupForm from 'components/SignupForm';
import Ink from 'images/ink.png';
// import styled from 'styled-components';

function SignupPageComponent(props) {
  return (
    <Grid
      textAlign="center"
    >
      <Grid.Column style={{ maxWidth: 450, marginTop: '3rem' }}>
        <Container>
          <Image src={Ink} size="tiny" centered />
          <Header> Create your Storypaddle account </Header>
          <SignupForm
            loading={props.signupPage.get('loading')}
            error={props.signupPage.get('error')}
          />
        </Container>
      </Grid.Column>
    </Grid>
  );
}

SignupPageComponent.propTypes = {
  signupPage: PropTypes.object,
};

export default SignupPageComponent;
