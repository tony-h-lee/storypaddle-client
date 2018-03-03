/**
*
* AuthWrapper
*
*/
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function AuthWrapper(props) {
  console.log(props.token);
  return (
    props.token ? props.AuthComponent : props.PublicComponent
  );
}

AuthWrapper.propTypes = {
  token: PropTypes.object.isRequired,
  AuthComponent: PropTypes.func.isRequired,
  PublicComponent: PropTypes.func.isRequired,
};

export default AuthWrapper;
