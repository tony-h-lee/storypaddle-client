/**
*
* NarrativeOverviewNotFound
*
*/

import React from 'react';

import { Grid, Container, Image } from 'semantic-ui-react';
import Missing from 'images/missing.png';
// import styled from 'styled-components';


function NarrativeOverviewNotFound() {
  return (
    <Grid
      textAlign="center"
      style={{ marginTop: '2rem' }}
    >
      <Grid.Column style={{ maxWidth: 650 }}>
        <Container textAlign="center">
          <h1> Narrative not found </h1>
          <p> No such narrative exists or the author may have chosen to delete this narrative. </p>
          <Image centered src={Missing} size="small" style={{ marginTop: '2.3rem' }} />

        </Container>
      </Grid.Column>
    </Grid>
  );
}

NarrativeOverviewNotFound.propTypes = {

};

export default NarrativeOverviewNotFound;
