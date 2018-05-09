/**
*
* TutorialsAccordion
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Icon } from 'semantic-ui-react';
// import styled from 'styled-components';

function TutorialsAccordion(props) {
  const activeIndex = props.tutorialsPage.get('activeIndex');
  return (
    <Accordion styled fluid>
      <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={(e, titleProps) => props.actions.setAccordionIndex(titleProps.index)}
      >
        <Icon name="dropown" />
        What is a dog?
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a
          {' '}welcome guest in many households across the world.
        </p>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={(e, titleProps) => props.actions.setAccordionIndex(titleProps.index)}
      >
        <Icon name="dropown" />
        What kinds of dogs are there?
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        <p>
          There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of
          {' '}dog that they find to be compatible with their own lifestyle and desires from a companion.
        </p>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={(e, titleProps) => props.actions.setAccordionIndex(titleProps.index)}
      >
        <Icon name="dropown" />
        How do you acquire a dog?
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
        <p>
          Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
        </p>
        <p>
          A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
          {' '}assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your
          {' '}dog from a shelter, helps give a good home to a dog who may not find one so readily.
        </p>
      </Accordion.Content>
    </Accordion>
  );
}

TutorialsAccordion.propTypes = {
  actions: PropTypes.object,
  tutorialsPage: PropTypes.object,
};

export default TutorialsAccordion;
