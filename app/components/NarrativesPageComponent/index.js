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
// import styled from 'styled-components';

function NarrativesPageComponent(props) {
  return (
    <DashboardSectionWrapper>
      <Container text textAlign="left">
        <AsyncWrapper
          spinner
          animate
          innerComponent={<div></div>}
          errorComponent={
            <ErrorComponent
              header={'Sorry, an error occurred!'}
            />
          }
          payload={props.narrativesPage.get('narratives')}
          error={props.narrativesPage.get('error')}
          loading={props.narrativesPage.get('loading')}
        />
      </Container>
    </DashboardSectionWrapper>
  );
}

NarrativesPageComponent.propTypes = {
  narrativesPage: PropTypes.object,
};

export default NarrativesPageComponent;
