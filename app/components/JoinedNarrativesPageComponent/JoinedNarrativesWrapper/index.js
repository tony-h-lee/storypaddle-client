/**
*
* JoinedNarrativesWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'semantic-ui-react';
import List from 'components/List';
import JoinedNarrativesItem from 'components/JoinedNarrativesPageComponent/JoinedNarrativesItem';
// import styled from 'styled-components';

function JoinedNarrativesWrapper(props) {
  const content = (
    <div style={{ marginTop: '2rem' }}>
      <List items={props.data} component={JoinedNarrativesItem} />
    </div>
  );

  return props.animate ?
    <Transition transitionOnMount animation="fade right" duration={230}>
      { content }
    </Transition>
    : content;
}

JoinedNarrativesWrapper.propTypes = {
  data: PropTypes.array,
  animate: PropTypes.bool,
};

export default JoinedNarrativesWrapper;
