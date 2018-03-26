/**
*
* CreateNarrativesPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container, Grid } from 'semantic-ui-react';
import DashboardSectionWrapper from 'components/DashboardSectionWrapper';
import CreateNarrativesForm from 'components/CreateNarrativesForm';
// import styled from 'styled-components';


function CreateNarrativesPageComponent(props) {
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
        <Grid.Column style={{ maxWidth: 450 }}>
          <Container textAlign="left">
            <CreateNarrativesForm
              roles={props.createNarrativesPage.get('roles')}
              user={props.user}
              actions={props.actions}
              token={props.token}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </DashboardSectionWrapper>
  );
}

CreateNarrativesPageComponent.propTypes = {
  createNarrativesPage: PropTypes.object,
  actions: PropTypes.object,
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  token: PropTypes.string,
};

export default CreateNarrativesPageComponent;
