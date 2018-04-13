/**
*
* ErrorComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Message, Icon, Container } from 'semantic-ui-react';
// import styled from 'styled-components';

function ErrorComponent(props) {
  return (
    <Grid
      textAlign="center"
      verticalAlign="center"
      style={{ marginTop: '2rem' }}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Container textAlign="left">
          <Message negative icon>
            <Icon name={props.icon ? props.icon : 'warning circle'} />
            <Message.Content>
              <Message.Header> {props.header ? props.header : 'An error occurred'} </Message.Header>
              <p> {props.message ?
                props.message : 'Please give us some time to sort things out before trying agin.'} </p>
            </Message.Content>
          </Message>
        </Container>
      </Grid.Column>
    </Grid>
  );
}

ErrorComponent.propTypes = {
  header: PropTypes.string,
  message: PropTypes.string,
  icon: PropTypes.string,
};

export default ErrorComponent;
