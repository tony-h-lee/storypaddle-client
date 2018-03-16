/**
*
* NavbarComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import AuthWrapper from 'components/AuthWrapper';
import ResponsiveWrapper from 'components/ResponsiveWrapper';
import NavbarAuth from './NavbarAuth';
import NavbarPublic from './NavbarPublic';
import ResponsiveNavbarAuth from './Responsive/ResponsiveNavbarAuth';
import ResponsiveNavbarPublic from './Responsive/ResponsiveNavbarPublic';
// import styled from 'styled-components';

function NavbarComponent(props) {
  return (
    <div>
      <ResponsiveWrapper
        BigComponent={() => (
          <AuthWrapper
            token={props.token}
            AuthComponent={() => (<NavbarAuth logout={props.logout} />)}
            PublicComponent={NavbarPublic}
          />
        )}
        SmallComponent={() => (
          <AuthWrapper
            token={props.token}
            AuthComponent={() => (<ResponsiveNavbarAuth logout={props.logout} />)}
            PublicComponent={ResponsiveNavbarPublic}
          />
        )}
      />
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
