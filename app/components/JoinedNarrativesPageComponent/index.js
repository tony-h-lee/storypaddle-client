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
  console.log(props.joinedNarrativesPage.get('narratives'));
  return (
    <DashboardSectionWrapper>
      <h1> Joined Narratives </h1>

      <Container text textAlign="left">
        <AsyncWrapper
          spinner
          innerComponent={JoinedNarrativesWrapper}
          payload={props.joinedNarrativesPage.get('narratives')}
          error={props.joinedNarrativesPage.get('error')}
          loading={props.joinedNarrativesPage.get('loading')}
          moreProps={{
            actions: { leave: props.actions.leaveNarrative, openConfirm: props.openConfirm },
            userId: props.user.id,
            token: props.token,
          }}
        />
      </Container>
    </DashboardSectionWrapper>
  );
}

JoinedNarrativesPageComponent.propTypes = {
  joinedNarrativesPage: PropTypes.object,
  openConfirm: PropTypes.func,
  actions: PropTypes.object,
  user: PropTypes.object,
  token: PropTypes.string,
};

export default JoinedNarrativesPageComponent;
