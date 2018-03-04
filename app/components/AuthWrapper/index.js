/**
*
* AuthWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function AuthWrapper(props) {
  const { AuthComponent, PublicComponent } = props;
  return (
    props.token ? <AuthComponent /> : <PublicComponent />
  );
}

AuthWrapper.propTypes = {
  token: PropTypes.object,
  AuthComponent: PropTypes.func.isRequired,
  PublicComponent: PropTypes.func.isRequired,
};

export default AuthWrapper;
