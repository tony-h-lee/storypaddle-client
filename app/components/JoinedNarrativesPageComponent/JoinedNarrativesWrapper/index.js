/**
*
* JoinedNarrativesWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Transition, Grid, Container, Icon, Button } from 'semantic-ui-react';
import List from 'components/List';
import { Link } from 'react-router-dom';
import JoinedNarrativesItem from 'components/JoinedNarrativesPageComponent/JoinedNarrativesItem';
// import styled from 'styled-components';

function JoinedNarrativesWrapper(props) {
  const content = (
    <div style={{ marginTop: '2rem' }}>
      {
        props.data.size > 0 ?
          <div>
            <List
              items={props.data}
              component={JoinedNarrativesItem}
              moreProps={props.moreProps}
            />
            {
              props.moreProps.hasNext ?
                <Button
                  style={{ marginTop: '2rem' }}
                  as={Link}
                  to={`/joined-narratives?next=${props.moreProps.next ? props.moreProps.next : ''}`}
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
                  to={`/joined-narratives?previous=${props.moreProps.previous ? props.moreProps.previous : ''}`}
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
                  <Icon name="folder open outline" size="huge" style={{ marginBottom: '2rem' }} />
                  <p> You have not joined any Narratives! </p>
                  <Button
                    style={{ marginTop: '2rem' }}
                    as={Link}
                    to={'/narratives/trending'}
                    primary
                    size="large"
                    fluid
                    icon="search"
                    content="Search for Narratives to join!"
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

JoinedNarrativesWrapper.propTypes = {
  data: PropTypes.object,
  animate: PropTypes.bool,
  moreProps: PropTypes.object,
};

export default JoinedNarrativesWrapper;
