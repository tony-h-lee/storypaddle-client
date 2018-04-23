/**
*
* NavbarPublic
*
*/

import React from 'react';
import { Menu, Input } from 'semantic-ui-react';
import Logo from 'components/Logo';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';


function NavbarPublic() {
  return (
    <Menu borderless>
      <Menu.Item
        as={Logo}
      />
      <Menu.Item
        as={Link}
        to={'/'}
        name="Home"
      />
      <Menu.Item
        as={Link}
        to={'/narratives/trending'}
        name="Narratives"
      />
      <Menu.Item>
        <Input icon="search" placeholder="Search" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          as={Link}
          to={'/login'}
          name="Login"
        />
        <Menu.Item
          as={Link}
          to={'/signup'}
          name="Signup"
        />
      </Menu.Menu>
    </Menu>
  );
}

NavbarPublic.propTypes = {

};

export default NavbarPublic;
