/**
*
* ForgotPasswordPageComponent
*
*/

import React from 'react';
import { Grid, Container, Image, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ForgotPasswordForm from 'components/ForgotPasswordForm';
import Treasure from 'images/treasure.png';
// import styled from 'styled-components';

function ForgotPasswordPageComponent(props) {
  return (
    <Grid
      textAlign="center"
    >
      <Grid.Column style={{ maxWidth: 450, marginTop: '4rem' }}>
        <Container>
          <Image src={Treasure} size="large" />
          <Header> Enter your email and receive instructions on how to reset your password! </Header>
          <ForgotPasswordForm
            loading={props.forgotPasswordPage.get('loading')}
            error={props.forgotPasswordPage.get('error')}
          />
        </Container>
        <p> Not receiving your email? Check your spam folder or try again.
          Please contact support if you&apos;re experiencing further difficulties </p>
      </Grid.Column>
    </Grid>
  );
}

ForgotPasswordPageComponent.propTypes = {
  forgotPasswordPage: PropTypes.object,
};

export default ForgotPasswordPageComponent;
