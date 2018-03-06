/**
*
* ForgotPasswordPageComponent
*
*/

import React from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';
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
          <p> Enter your email and we&apos;ll send you an email with instructions on how to reset your password! </p>
          <ForgotPasswordForm
            loading={props.forgotPasswordPage.get('loading')}
            error={props.forgotPasswordPage.get('error')}
          />
        </Container>
      </Grid.Column>
    </Grid>
  );
}

ForgotPasswordPageComponent.propTypes = {
  forgotPasswordPage: PropTypes.object,
};

export default ForgotPasswordPageComponent;
