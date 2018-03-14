/**
*
* LoginPageComponent
*
*/

import React from 'react';
import { Grid, Container, Image, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import LoginForm from 'components/LoginForm';
import Scroll from 'images/scroll.png';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

function LoginPageComponent(props) {
  return (
    <Grid
      textAlign="center"
    >
      <Grid.Column style={{ maxWidth: 450, marginTop: '3rem' }}>
        <Container>
          <Image src={Scroll} size="small" centered />
          <Header> Log in to your Storypaddle account </Header>
          <LoginForm
            loading={props.loginPage.get('loading')}
            error={props.loginPage.get('error')}
          />
          <Link to={'/forgot-password'}>
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
