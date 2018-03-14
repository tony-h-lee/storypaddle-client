/**
*
* NavbarComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import {
  Responsive,
} from 'semantic-ui-react';
import AuthWrapper from 'components/AuthWrapper';
import NavbarAuth from './NavbarAuth';
import NavbarPublic from './NavbarPublic';
import ResponsiveNavbarAuth from './Responsive/ResponsiveNavbarAuth';
import ResponsiveNavbarPublic from './Responsive/ResponsiveNavbarPublic';
// import styled from 'styled-components';

function NavbarComponent(props) {
  return (
    <div>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <AuthWrapper
          token={props.token}
          AuthComponent={() => (<NavbarAuth logout={props.logout} />)}
          PublicComponent={NavbarPublic}
        />
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <AuthWrapper
          token={props.token}
          AuthComponent={() => (<ResponsiveNavbarAuth logout={props.logout} />)}
          PublicComponent={ResponsiveNavbarPublic}
        />
      </Responsive>
    </div>
  );
}

NavbarComponent.propTypes = {
  token: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  logout: PropTypes.func,
};

export default NavbarComponent;
