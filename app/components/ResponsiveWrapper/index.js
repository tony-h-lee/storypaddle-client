/**
*
* ResponsiveWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
// import styled from 'styled-components';


function ResponsiveWrapper(props) {
  return (
    <div>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        {props.BigComponent}
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        {props.SmallComponent}
      </Responsive>
    </div>
  );
}

ResponsiveWrapper.propTypes = {
  BigComponent: PropTypes.node.isRequired,
  SmallComponent: PropTypes.node.isRequired,
};

export default ResponsiveWrapper;
