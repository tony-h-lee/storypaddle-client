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
          error={props.narrativesPage.get('error')}
          loading={props.narrativesPage.get('loading')}
          moreProps={{ actions: props.actions,
            pagination: props.pagination,
            next: props.narrativesPage.get('next'),
            hasNext: props.narrativesPage.get('hasNext'),
            moreLoading: props.narrativesPage.get('moreLoading'),
            hasPrevious: props.narrativesPage.get('hasPrevious') }}
        />
      </Container>
    </DashboardSectionWrapper>
  );
}

NarrativesPageComponent.propTypes = {
  narrativesPage: PropTypes.object,
  narratives: PropTypes.object,
  pagination: PropTypes.string,
  actions: PropTypes.object,
};

export default NarrativesPageComponent;
