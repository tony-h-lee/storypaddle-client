/**
*
* DashboardPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
// import styled from 'styled-components';


function DashboardPageComponent(props) {
  return (
    <div>
      <h1> Dashboard </h1>
      <Button primary onClick={props.logout}> Logout </Button>
    </div>
  );
}

DashboardPageComponent.propTypes = {
  logout: PropTypes.func,
};

export default DashboardPageComponent;
