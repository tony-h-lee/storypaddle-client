/**
*
* LoginPageComponent
*
*/

import React from 'react';
import { Grid, Container, Image, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import LoginForm from 'components/LoginForm';
import Treasure from 'images/treasure.png';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

function LoginPageComponent(props) {
  return (
    <Grid
      textAlign="center"
    >
      <Grid.Column style={{ maxWidth: 450, marginTop: '4rem' }}>
        <Container>
          <Image src={Treasure} size="large" />
          <Header> Log in and start collecting! </Header>
          <LoginForm
            loading={props.loginPage.get('loading')}
            error={props.loginPage.get('error')}
          />
          <Link to={'/reset-password'}>
            Forgot your password?
          </Link>
        </Container>
      </Grid.Column>
    </Grid>
  );
}

LoginPageComponent.propTypes = {
  loginPage: PropTypes.object,
};

export default LoginPageComponent;
