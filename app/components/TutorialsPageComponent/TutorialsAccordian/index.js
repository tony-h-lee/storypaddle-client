/**
*
* TutorialsAccordion
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Icon } from 'semantic-ui-react';
import Sections from 'components/TutorialsPageComponent/Sections';
// import styled from 'styled-components';

function TutorialsAccordion(props) {
  const activeIndex = props.tutorialsPage.get('activeIndex');
  return (
    <Accordion styled fluid>
      {
        Sections.map((section) => (
          <div key={section.index}>
            <Accordion.Title
              active={activeIndex === section.index}
              index={section.index}
              onClick={(e, titleProps) => props.actions.setAccordionIndex(titleProps.index)}
            >
              <Icon name="dropdown" />
              { section.title }
            </Accordion.Title>
            <Accordion.Content active={activeIndex === section.index}>
              { section.content }
            </Accordion.Content>
          </div>
          )
        )
      }
    </Accordion>
  );
}

TutorialsAccordion.propTypes = {
  tutorialsPage: PropTypes.object,
};

export default TutorialsAccordion;
