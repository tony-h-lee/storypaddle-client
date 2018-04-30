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
  const narrativesData = props.narrativesPage;
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
          payload={narrativesData.get('narratives')}
          error={narrativesData.get('error')}
          loading={narrativesData.get('loading')}
          moreProps={{
            actions: props.actions,
            paginatedField: narrativesData.get('paginatedField'),
            next: narrativesData.get('next'),
            previous: narrativesData.get('previous'),
            token: props.token,
            hasNext: narrativesData.get('hasNext'),
            hasPrevious: narrativesData.get('hasPrevious') }}
        />
      </Container>
    </DashboardSectionWrapper>
  );
}

NarrativesPageComponent.propTypes = {
  token: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  narrativesPage: PropTypes.object,
  actions: PropTypes.object,
};

export default NarrativesPageComponent;
