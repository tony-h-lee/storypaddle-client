/**
*
* JoinedNarrativesPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import DashboardSectionWrapper from 'components/DashboardSectionWrapper';
import AsyncWrapper from 'components/AsyncWrapper';
import JoinedNarrativesWrapper from './JoinedNarrativesWrapper';
// import styled from 'styled-components';


function JoinedNarrativesPageComponent(props) {
  return (
    <DashboardSectionWrapper>
      <h1> Joined Narratives </h1>
      <Container text textAlign="left">
        <AsyncWrapper
          innerComponent={JoinedNarrativesWrapper}
          payload={props.joinedNarrativesPage.get('narratives')}
          error={props.joinedNarrativesPage.get('error')}
          loading={props.joinedNarrativesPage.get('loading')}
          actions={{ openConfirm: props.openConfirm }}
        />
      </Container>
    </DashboardSectionWrapper>
  );
}

JoinedNarrativesPageComponent.propTypes = {
  joinedNarrativesPage: PropTypes.object,
  openConfirm: PropTypes.func,
};

export default JoinedNarrativesPageComponent;
