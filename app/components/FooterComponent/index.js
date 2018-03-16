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
    <Grid centered style={{ margin: '2rem 0 0.2rem 0' }}>
      <Menu secondary size="tiny">
        <Menu.Item
          as={Link}
          to={'/about'}
          name="About"
        />
        <Menu.Item
          as={Link}
          to={'/help'}
          name="Help"
        />
        <Menu.Item
          as={Link}
          to={'/terms-of-service'}
          name="Terms"
        />
        <Menu.Item
          as={Link}
          to={'/privacy-policy'}
          name="Privacy Policy"
        />

      </Menu>
    </Grid>
  );
}

FooterComponent.propTypes = {

};

export default FooterComponent;
