/**
*
* HelpPageComponent
*
*/

import React from 'react';
import { Container, Header } from 'semantic-ui-react';
// import styled from 'styled-components';


function HelpPageComponent() {
  return (
    <Container text style={{ paddingTop: '3rem', paddingbottom: '3rem' }}>
      <Header
        as="h1"
        content="Contact Us!"
      />
      <p>
        Please send us an email regarding an issue or for any questions you may have. We will do our best to respond
        in a timely manner.
      </p>
      <p> Send your email to - <b> help@storypaddle.com </b> </p>
    </Container>
  );
}

HelpPageComponent.propTypes = {

};

export default HelpPageComponent;
