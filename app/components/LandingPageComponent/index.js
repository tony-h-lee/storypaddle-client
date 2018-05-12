/**
*
* LandingPageComponent
*
*/

import React from 'react';
import ResponsiveWrapper from 'components/ResponsiveWrapper';
import Landing from './Landing';
import ResponsiveLanding from './ResponsiveLanding';
// import styled from 'styled-components';

function LandingPageComponent() {
  return (
    <ResponsiveWrapper
      BigComponent={<Landing />}
      SmallComponent={<ResponsiveLanding />}
    />
  );
}

LandingPageComponent.propTypes = {

};

export default LandingPageComponent;
