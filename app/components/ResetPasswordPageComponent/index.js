/**
 *
 * ResetPasswordPageComponent
 *
 */

import React from 'react';
import { Grid, Container, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ResetPasswordForm from 'components/ResetPasswordForm';
// import styled from 'styled-components';

function ResetPasswordPageComponent(props) {
  return (
    <Grid
      textAlign="center"
    >
      <Grid.Column style={{ maxWidth: 450, marginTop: '4rem' }}>
        <Container>
          <Header> Enter your old password and new password </Header>
          <ResetPasswordForm
            loading={props.resetPasswordPage.get('loading')}
            error={props.resetPasswordPage.get('error')}
          />
        </Container>
      </Grid.Column>
    </Grid>
  );
}

ResetPasswordPageComponent.propTypes = {
  resetPasswordPage: PropTypes.object,
};

export default ResetPasswordPageComponent;
