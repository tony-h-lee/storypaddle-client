/**
*
* SettingsPageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import AsyncWrapper from 'components/AsyncWrapper';
import ErrorComponent from 'components/ErrorComponent';
import DashboardSectionWrapper from 'components/DashboardSectionWrapper';
import SettingsPageWrapper from './SettingsPageWrapper';

// import styled from 'styled-components';


function SettingsPageComponent(props) {
  return (
    <DashboardSectionWrapper>
      <h1> Settings </h1>

      <Container text textAlign="left">
        <AsyncWrapper
          spinner={false}
          animate
          innerComponent={SettingsPageWrapper}
          errorComponent={
            <ErrorComponent
              header={'Sorry, an error occurred!'}
            />
          }
          payload={props.user}
          error={props.settingsPage.get('error')}
          loading={props.settingsPage.get('loading')}
        />
      </Container>
    </DashboardSectionWrapper>
  );
}

SettingsPageComponent.propTypes = {
  settingsPage: PropTypes.object,
  user: PropTypes.object,
};

export default SettingsPageComponent;
