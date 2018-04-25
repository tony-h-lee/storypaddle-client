/**
*
* NarrativesPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import DashboardSectionWrapper from 'components/DashboardSectionWrapper';
import AsyncWrapper from 'components/AsyncWrapper';
import ErrorComponent from 'components/ErrorComponent';
import NarrativesWrapper from './NarrativesWrapper';
// import styled from 'styled-components';

function NarrativesPageComponent(props) {
  const narrativesData = props.narrativesNewPage ? props.narrativesNewPage : props.narrativesTrendingPage;
  return (
    <DashboardSectionWrapper>
      <Container textAlign="left">
        <AsyncWrapper
          spinner
          innerComponent={NarrativesWrapper}
          errorComponent={
            <ErrorComponent
              header={'Sorry, an error occurred!'}
            />
          }
          payload={props.narratives}
          error={narrativesData.get('error')}
          loading={narrativesData.get('loading')}
          moreProps={{ actions: props.actions,
            paginationField: narrativesData.get('paginationField'),
            next: narrativesData.get('next'),
            hasNext: narrativesData.get('hasNext'),
            moreLoading: narrativesData.get('moreLoading'),
            hasPrevious: narrativesData.get('hasPrevious') }}
        />
      </Container>
    </DashboardSectionWrapper>
  );
}

NarrativesPageComponent.propTypes = {
  narrativesNewPage: PropTypes.object,
  narrativesTrendingPage: PropTypes.object,
  narratives: PropTypes.object,
  actions: PropTypes.object,
};

export default NarrativesPageComponent;
