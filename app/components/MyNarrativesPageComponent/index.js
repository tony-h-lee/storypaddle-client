/**
*
* MyNarrativesPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import DashboardSectionWrapper from 'components/DashboardSectionWrapper';
import AsyncWrapper from 'components/AsyncWrapper';
import ErrorComponent from 'components/ErrorComponent';
import MyNarrativesWrapper from './MyNarrativesWrapper';
// import styled from 'styled-components';


function MyNarrativesPageComponent(props) {
  return (
    <DashboardSectionWrapper>
      <h1> My Narratives </h1>
      <Container text textAlign="left">
        <AsyncWrapper
          spinner
          animate
          innerComponent={MyNarrativesWrapper}
          errorComponent={
            <ErrorComponent
              header={'Sorry, an error occurred!'}
            />
          }
          payload={props.ownedNarrativesPage.get('narratives')}
          error={props.ownedNarrativesPage.get('error')}
          loading={props.ownedNarrativesPage.get('loading')}
          moreProps={{
            actions: { openConfirm: props.openConfirm, deleteNarrative: props.actions.deleteNarrative },
            userId: props.user ? props.user.get('id') : false,
            token: props.token,
          }}
        />
      </Container>
    </DashboardSectionWrapper>
  );
}

MyNarrativesPageComponent.propTypes = {
  ownedNarrativesPage: PropTypes.object,
  openConfirm: PropTypes.func,
  actions: PropTypes.object,
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  token: PropTypes.string,
};

export default MyNarrativesPageComponent;
