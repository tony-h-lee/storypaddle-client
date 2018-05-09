/**
*
* TutorialsPageComponent
*
*/

import React from 'react';
import { Container } from 'semantic-ui-react';
import DashboardSectionWrapper from 'components/DashboardSectionWrapper';
import TutorialsAccordion from './TutorialsAccordian';
// import styled from 'styled-components';


function TutorialsPageComponent(props) {
  return (
    <DashboardSectionWrapper>
      <h1> Frequently Asked Questions </h1>
      <Container text textAlign="left">
        <TutorialsAccordion {...props} />
      </Container>
    </DashboardSectionWrapper>
  );
}

TutorialsPageComponent.propTypes = {
};

export default TutorialsPageComponent;
