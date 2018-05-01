/**
*
* ScenePageComponent
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import AsyncWrapper from 'components/AsyncWrapper';
import ErrorComponent from 'components/ErrorComponent';
import ScenePageWrapper from './ScenePageWrapper';
// import styled from 'styled-components';


function ScenePageComponent(props) {
  return (
    <Container textAlign="left">
      <AsyncWrapper
        innerComponent={ScenePageWrapper}
        errorComponent={
          <ErrorComponent
            header={'Sorry, an error occurred!'}
          />
        }
        payload={props.scenePage.get('scene')}
        error={props.scenePage.get('error')}
        loading={props.scenePage.get('loading')}
        moreProps={{
          actions: props.actions,
          next: props.scenePage.get('next'),
          previous: props.scenePage.get('previous'),
          token: props.token,
          user: props.user,
          hasNext: props.scenePage.get('hasNext'),
          hasPrevious: props.scenePage.get('hasPrevious') }}
      />
    </Container>
  );
}

ScenePageComponent.propTypes = {
  scenePage: PropTypes.object,
  actions: PropTypes.object,
  token: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

export default ScenePageComponent;
