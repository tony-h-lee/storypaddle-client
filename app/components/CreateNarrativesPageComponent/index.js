/**
*
* CreateNarrativesPageComponent
*
*/

import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import DashboardSectionWrapper from 'components/DashboardSectionWrapper';
import CreateNarrativesForm from 'components/CreateNarrativesForm';
// import styled from 'styled-components';


function CreateNarrativesPageComponent() {
  return (
    <DashboardSectionWrapper>
      <Header
        as="h1"
      >
        Create Narrative
      </Header>
      <Grid
        textAlign="center"
      >
        <Grid.Column style={{ maxWidth: 450, marginTop: '1rem' }}>
          <Container>
            <CreateNarrativesForm />
          </Container>
        </Grid.Column>
      </Grid>
    </DashboardSectionWrapper>
  );
}

CreateNarrativesPageComponent.propTypes = {

};

export default CreateNarrativesPageComponent;
