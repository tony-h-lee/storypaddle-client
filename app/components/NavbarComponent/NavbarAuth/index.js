/**
*
* NavbarAuth
*
*/

import React from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from 'components/Logo';
import { Link } from 'react-router-dom';
import NavbarSearch from 'components/NavbarComponent/NavbarSearch';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function NavbarAuth(props) {
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
          as="a"
          onClick={props.logout}
          name="Logout"
        />
      </Menu.Menu>
    </Menu>
  );
}

NavbarAuth.propTypes = {
  logout: PropTypes.func,
};

export default NavbarAuth;
