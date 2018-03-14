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
  Input,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
// import styled from 'styled-components';

function NavbarComponent() {
  return (
    <div>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Menu>
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
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <Menu widths={3} style={{ height: '49.19px' }}>
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
            as={Link}
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
