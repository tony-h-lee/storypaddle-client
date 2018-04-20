/**
 *
 * NarrativesWrapper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Transition, Grid, Container, Icon, Button } from 'semantic-ui-react';
import NarrativeGridList from 'components/NarrativeGridList';
import { Link } from 'react-router-dom';
import NarrativesItem from 'components/NarrativesPageComponent/NarrativesItem';
// import styled from 'styled-components';


function NarrativesWrapper(props) {
  const content = (
    <div style={{ marginTop: '2rem' }}>
      {
        props.data.size > 0 ?
          <NarrativeGridList
            items={props.data}
            component={NarrativesItem}
            moreProps={props.moreProps}
          />
          :
          (
            <Grid
              textAlign="center"
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Container textAlign="center">
                  <Icon size="huge" name="folder open outline" style={{ marginBottom: '2rem' }} />
                  <p> There are currently no narratives ever made! Why don&apos;t you be the first? </p>
                  <Button
                    style={{ marginTop: '2rem' }}
                    as={Link}
                    to={'/create-narrative'}
                    color="orange"
                    size="large"
                    fluid
                    icon="write"
                    content="Create a Narrative!"
                  />
                </Container>
              </Grid.Column>
            </Grid>
          )
      }
    </div>
  );

  return props.animate ?
    <Transition transitionOnMount animation="fade right" duration={230}>
      { content }
    </Transition>
    : content;
}

NarrativesWrapper.propTypes = {
  data: PropTypes.object,
  animate: PropTypes.bool,
  moreProps: PropTypes.object,
};

export default NarrativesWrapper;
