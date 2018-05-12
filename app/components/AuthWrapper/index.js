/**
*
* AuthWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function AuthWrapper(props) {
  return (
    <div>
      {
        props.token ?
          props.AuthComponent
          :
          props.PublicComponent
      }
    </div>
  );
}

AuthWrapper.propTypes = {
  token: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  AuthComponent: PropTypes.node.isRequired,
  PublicComponent: PropTypes.node.isRequired,
};

export default AuthWrapper;
