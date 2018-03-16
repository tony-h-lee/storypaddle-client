/**
*
* FooterComponent
*
*/

import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';


function FooterComponent() {
  return (
    <Grid centered>
      <Menu secondary>
        <Menu.Item
          as={Link}
          to={'/contact'}
          name="Contact"
        />
        <Menu.Item
          as={Link}
          to={'/terms-conditions'}
          name="Terms and Conditions"
        />
      </Menu>
    </Grid>
  );
}

FooterComponent.propTypes = {

};

export default FooterComponent;
