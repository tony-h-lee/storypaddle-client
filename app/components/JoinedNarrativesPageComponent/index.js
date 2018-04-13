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
import ErrorComponent from 'components/ErrorComponent';
import JoinedNarrativesWrapper from './JoinedNarrativesWrapper';
// import styled from 'styled-components';


function JoinedNarrativesPageComponent(props) {
  return (
    <DashboardSectionWrapper>
      <h1> Joined Narratives </h1>

      <Container text textAlign="left">
        <AsyncWrapper
          spinner
          animate
          innerComponent={JoinedNarrativesWrapper}
          errorComponent={
            <ErrorComponent
              header={'Sorry, an error occurred!'}
            />
          }
          payload={props.joinedNarrativesPage.get('narratives')}
          error={props.joinedNarrativesPage.get('error')}
          loading={props.joinedNarrativesPage.get('loading')}
          moreProps={{
            actions: { leave: props.actions.leaveNarrative, openConfirm: props.openConfirm },
            userId: props.user ? props.user.get('id') : false,
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
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  token: PropTypes.string,
};

export default JoinedNarrativesPageComponent;
