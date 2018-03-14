/**
*
* ResponsiveNavbarAuth
*
*/

import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function ResponsiveNavbarAuth(props) {
  return (
    <Menu widths={3}>
      <Menu.Item
        as={Link}
        to={'/'}
        content={<Icon name="home" />}
      />
      <Menu.Item
        as={Link}
        to={'/login'}
        content={<Icon name="gamepad" />}
      />
      <Menu.Item
        as="a"
        onClick={props.logout}
        content={<Icon name="external share" />}
      />
    </Menu>
  );
}

ResponsiveNavbarAuth.propTypes = {
  logout: PropTypes.func,
};

export default ResponsiveNavbarAuth;
