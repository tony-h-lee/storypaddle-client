/**
*
* Landing
*
*/

import React from 'react';
import { Image, Dimmer, Container, Header, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Fantasy from 'images/fantasy.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: auto;
  max-height: 500px;
  overflow: hidden;
  z-index: 1;
`;

const LightDimmer = styled(Dimmer)`
  &&& {
    background: rgba(0,0,0,0.6);
  }
`;

const TextOverlay = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  height: auto;
  margin-top: 12rem;
  color: #FFF;
`;

function Landing() {
  return (
    <div>
      <TextOverlay>
        <Container text>
          <Header
            as="h1"
            content="Be anyone, tell a story with others"
            inverted
          />
          <p>
            From knights to space explorers, castles to pirate ships, times of peace to times of war,
            and love lost to love found, create and live scenarios with the Storypaddle community.
          </p>
          <Button as={Link} to={'/narratives'} color="orange" size="huge">
            Browse Stories
            <Icon name="angle right" />
          </Button>
        </Container>
      </TextOverlay>
      <Wrapper>
        <LightDimmer active />
        <Image src={Fantasy} />
      </Wrapper>
    </div>
  );
}

Landing.propTypes = {

};

export default Landing;
