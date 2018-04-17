/**
*
* NarrativeOverviewNotFound
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Image } from 'semantic-ui-react';
import Dog from 'images/dog.png';
// import styled from 'styled-components';


function NarrativeOverviewNotFound(props) {
  return (
    <Grid
      textAlign="center"
      style={{ marginTop: '2rem' }}
    >
      <Grid.Column style={{ maxWidth: 650 }}>
        <Container textAlign="center">
          <h1> Narrative not found </h1>
          <p> No such narrative exists or the author may have chosen to delete this narrative. </p>
          <Image centered src={Dog} size="medium" style={{ marginTop: '2.3rem' }} />

        </Container>
      </Grid.Column>
    </Grid>
  );
}

NarrativeOverviewNotFound.propTypes = {

};

export default NarrativeOverviewNotFound;
