/**
 *
 * ResetPasswordPageComponent
 *
 */

import React from 'react';
import { Grid, Container, Header, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ResetPasswordForm from 'components/ResetPasswordForm';
import Crown from 'images/crown.png';
// import styled from 'styled-components';

function ResetPasswordPageComponent(props) {
  return (
    <Grid
      textAlign="center"
    >
      <Grid.Column style={{ maxWidth: 450, marginTop: '4rem' }}>
        <Container>
          <Image src={Crown} size="small" centered />
          <Header> Please enter your new password </Header>
          <ResetPasswordForm
            loading={props.resetPasswordPage.get('loading')}
            error={props.resetPasswordPage.get('error')}
            token={props.match.params.token}
          />
        </Container>
      </Grid.Column>
    </Grid>
  );
}

ResetPasswordPageComponent.propTypes = {
  resetPasswordPage: PropTypes.object,
  token: PropTypes.object,
  match: PropTypes.object,
};

export default ResetPasswordPageComponent;
