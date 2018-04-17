/**
*
* ErrorPageComponent
*
*/

import React from 'react';
import { Grid, Container, Image } from 'semantic-ui-react';
import Dog from 'images/dog.png';
// import styled from 'styled-components';


function ErrorPageComponent() {
  return (
    <Grid
      textAlign="center"
      style={{ marginTop: '2rem' }}
    >
      <Grid.Column style={{ maxWidth: 650 }}>
        <Container textAlign="center">
          <h1> Oh no, something went wrong! </h1>
          <p> Please give us some time before trying again. Mashing refresh will make recovery take longer. </p>
          <Image centered src={Dog} size="medium" style={{ marginTop: '2.3rem' }} />

        </Container>
      </Grid.Column>
    </Grid>
  );
}

ErrorPageComponent.propTypes = {

};

export default ErrorPageComponent;
