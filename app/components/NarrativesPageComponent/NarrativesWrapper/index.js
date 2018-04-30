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
    <div style={{ marginTop: '2rem', height: '100%', minHeight: '100vh' }}>
      {
        props.data.size > 0 ?
          <div>
            <NarrativeGridList
              items={props.data}
              component={NarrativesItem}
              moreProps={props.moreProps}
            />
            {
              props.moreProps.hasNext ?
                <Button
                  style={{ marginTop: '2rem' }}
                  as={Link}
                  to={`/narratives?next=${props.moreProps.next ? props.moreProps.next : ''}`}
                  primary
                  size="large"
                  floated="right"
                >
                  Next
                  <Icon name="right chevron" />
                </Button>
                : null
            }
            {
              props.moreProps.hasPrevious ?
                <Button
                  style={{ marginTop: '2rem' }}
                  as={Link}
                  to={`/narratives?previous=${props.moreProps.previous ? props.moreProps.previous : ''}`}
                  primary
                  size="large"
                  floated="left"
                >
                  <Icon name="left chevron" />
                  Previous
                </Button>
                : null
            }
          </div>
          :
          (
            <Grid
              textAlign="center"
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Container textAlign="center">
                  <Icon size="huge" name="folder open outline" style={{ marginBottom: '2rem' }} />
                  <p> There are currently no narratives with the current filter to display. </p>
                  { props.token ?
                    <Button
                      style={{ marginTop: '2rem' }}
                      as={Link}
                      to={'/create-narrative'}
                      color="orange"
                      size="large"
                      fluid
                      icon="write"
                      content="Create a Narrative!"
                    /> :
                    <Button
                      style={{ marginTop: '2rem' }}
                      as={Link}
                      to={'/signup'}
                      color="orange"
                      size="large"
                      fluid
                      icon="write"
                      content="Create a Narrative!"
                    />}

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
  token: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  data: PropTypes.object,
  animate: PropTypes.bool,
  moreProps: PropTypes.object,
};

export default NarrativesWrapper;
