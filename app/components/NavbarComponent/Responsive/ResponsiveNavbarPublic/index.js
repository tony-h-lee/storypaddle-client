/**
*
* ResponsiveNavbarPublic
*
*/

import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';


function ResponsiveNavbarPublic() {
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
        as={Link}
        to={'/signup'}
        content={<Icon name="signup" />}
      />
    </Menu>
  );
}

ResponsiveNavbarPublic.propTypes = {

};

export default ResponsiveNavbarPublic;
