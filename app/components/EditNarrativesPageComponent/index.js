/**
*
* EditNarrativesPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container, Grid } from 'semantic-ui-react';
import DashboardSectionWrapper from 'components/DashboardSectionWrapper';
import EditNarrativesForm from 'components/EditNarrativesForm';
// import styled from 'styled-components';


function EditNarrativesPageComponent(props) {
  return (
    <DashboardSectionWrapper>
      <Header
        as="h1"
      >
        Editing {props.editNarrativesPage ?
        props.editNarrativesPage.getIn(['narrative', 'title']) : 'Narrative'}
      </Header>
      <Grid
        textAlign="center"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Container textAlign="left">
            {
              props.editNarrativesPage.get('narrative') &&
              <EditNarrativesForm
                narrative={props.editNarrativesPage.get('narrative')}
                actions={props.actions}
                token={props.token}
              />
            }
          </Container>
        </Grid.Column>
      </Grid>
    </DashboardSectionWrapper>
  );
}

EditNarrativesPageComponent.propTypes = {
  editNarrativesPage: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  actions: PropTypes.object,
  token: PropTypes.string,
};

export default EditNarrativesPageComponent;
