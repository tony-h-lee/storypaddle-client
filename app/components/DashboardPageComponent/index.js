/**
*
* DashboardPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container } from 'semantic-ui-react';
import GridList from 'components/GridList';
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
        My Dashboard
      </Header>
      <Container>
        <GridList
          component={DashboardSectionButton}
          items={Sections}
          moreProps={{ logout: props.logout }}
        />
      </Container>
    </DashboardSectionWrapper>
  );
}

DashboardPageComponent.propTypes = {
  logout: PropTypes.func,
};

export default DashboardPageComponent;
