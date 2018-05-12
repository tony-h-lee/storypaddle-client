/**
*
* NavbarPublic
*
*/

import React from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from 'components/Logo';
import { Link } from 'react-router-dom';
import NavbarSearch from 'components/NavbarComponent/NavbarSearch';
// import styled from 'styled-components';


function NavbarPublic(props) {
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
        to={'/narratives'}
        name="Narratives"
      />
      <Menu.Item>
        <NavbarSearch {...props} />
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
