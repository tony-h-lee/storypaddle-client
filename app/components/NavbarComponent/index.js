/**
*
* NavbarComponent
*
*/

import React from 'react';
import {
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingMenuLink = styled(Link)`
  &&& {
    font-family: 'Seymour One', sans-serif;
  }
`;

function NavbarComponent() {
  return (
    <Menu widths={3}>
      <Menu.Item
        as={LandingMenuLink}
        to={'/signup'}
        name="Signup"
      />
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
    </Menu>
  );
}

NavbarComponent.propTypes = {

};

export default NavbarComponent;
