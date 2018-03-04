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
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingMenuLink = styled(Link)`
  &&& {
    font-family: 'Seymour One', sans-serif;
    font-size: 1.2rem;
  }
`;

function NavbarComponent() {
  return (
    <div>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Menu widths={3} style={{ height: '49.19px' }}>
          <Menu.Item
            as={LandingMenuLink}
            to={'/'}
            name="NobleLoot"
          />
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
