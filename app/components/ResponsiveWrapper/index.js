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
  const { BigComponent, SmallComponent } = props;
  return (
    <div>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <BigComponent />
      </Responsive>
      <Responsive {...Responsive.onlyMobile}>
        <SmallComponent />
      </Responsive>
    </div>
  );
}

ResponsiveWrapper.propTypes = {
  BigComponent: PropTypes.func.isRequired,
  SmallComponent: PropTypes.func.isRequired,
};

export default ResponsiveWrapper;
