/**
*
* DashboardPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Container } from 'semantic-ui-react';
import List from 'components/List';
import DashboardSectionButton from 'components/DashboardSectionButton';
import DashboardSectionWrapper from 'components/DashboardSectionWrapper';
import Sections from './Sections';
// import styled from 'styled-components';


function DashboardPageComponent(props) {
  return (
    <DashboardSectionWrapper>
      <Header
        as="h1"
      >
        Dashboard
      </Header>
      <Container>
        <List
          component={DashboardSectionButton}
          items={Sections}
        />
      </Container>
      <Button primary onClick={props.logout}> Logout </Button>
    </DashboardSectionWrapper>
  );
}

DashboardPageComponent.propTypes = {
  logout: PropTypes.func,
};

export default DashboardPageComponent;
