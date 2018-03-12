/**
*
* NavbarComponent
*
*/

import React from 'react';
import {
  Menu,
  Responsive,
  Icon,
  Container,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingMenuLink = styled(Link)`
  &&& {
  }
`;

function NavbarComponent() {
  return (
    <div>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Menu>
          <Container>
            <Menu.Item
              as={LandingMenuLink}
              to={'/'}
              name="Storypaddle"
            />
            <Menu.Item
              as={LandingMenuLink}
              to={'/narratives'}
              name="Narratives"
            />
            <Menu.Menu position="right">
              <Menu.Item
                as={LandingMenuLink}
                to={'/login'}
                name="Login"
              />
              <Menu.Item
                as={LandingMenuLink}
                to={'/signup'}
                name="Signup"
              />
            </Menu.Menu>
          </Container>
        </Menu>
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <Menu widths={3} style={{ height: '49.19px' }}>
          <Menu.Item
            as={LandingMenuLink}
            to={'/'}
            content={<Icon name="home" />}
          />
          <Menu.Item
            as={LandingMenuLink}
            to={'/login'}
            content={<Icon name="gamepad" />}
          />
          <Menu.Item
            as={LandingMenuLink}
            to={'/signup'}
            content={<Icon name="signup" />}
          />
        </Menu>
      </Responsive>
    </div>
  );
}

NavbarComponent.propTypes = {

};

export default NavbarComponent;
