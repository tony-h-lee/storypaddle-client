/**
*
* TutorialsPageComponent
*
*/

import React from 'react';
import { Container } from 'semantic-ui-react';
import DashboardSectionWrapper from 'components/DashboardSectionWrapper';
// import styled from 'styled-components';


function TutorialsPageComponent() {
  return (
    <DashboardSectionWrapper>
      <h1> Tutorials </h1>

      <Container text textAlign="left">
        <p> hello there </p>
      </Container>
    </DashboardSectionWrapper>
  );
}

TutorialsPageComponent.propTypes = {
};

export default TutorialsPageComponent;
