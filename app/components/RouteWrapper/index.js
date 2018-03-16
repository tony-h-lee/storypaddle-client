/**
*
* RouteWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
`;

function RouteWrapper(props) {
  return (
    <Wrapper>
      { <props.innerComponent /> }
    </Wrapper>
  );
}

RouteWrapper.propTypes = {
  innerComponent: PropTypes.func.isRequired,
};

export default RouteWrapper;
