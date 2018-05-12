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
        token={props.token}
        BigComponent={
          <AuthWrapper
            token={props.token}
            AuthComponent={<NavbarAuth {...props} />}
            PublicComponent={<NavbarPublic {...props} />}
          />
        }
        SmallComponent={
          <AuthWrapper
            token={props.token}
            AuthComponent={<ResponsiveNavbarAuth {...props} />}
            PublicComponent={<ResponsiveNavbarPublic {...props} />}
          />
        }
      />
    </div>
  );
}

NavbarComponent.propTypes = {
  token: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};

export default NavbarComponent;
