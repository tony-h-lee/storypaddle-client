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
      {
        props.data.size > 0 ?
          <List
            items={props.data}
            component={JoinedNarrativesItem}
            moreProps={props.moreProps}
          />
          :
          <p> You have not joined any Narratives! </p>
      }
    </div>
  );

  return props.animate ?
    <Transition transitionOnMount animation="fade right" duration={230}>
      { content }
    </Transition>
    : content;
}

JoinedNarrativesWrapper.propTypes = {
  data: PropTypes.object,
  animate: PropTypes.bool,
  moreProps: PropTypes.object,
};

export default JoinedNarrativesWrapper;
