/**
*
* MyNarrativesWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Transition, Grid, Container, Icon, Button } from 'semantic-ui-react';
import List from 'components/List';
import { Link } from 'react-router-dom';
import MyNarrativesItem from 'components/MyNarrativesPageComponent/MyNarrativesItem';
// import styled from 'styled-components';


function MyNarrativesWrapper(props) {
  const content = (
    <div style={{ marginTop: '2rem' }}>
      {
        props.data.size > 0 ?
          <div>
            <List
              items={props.data}
              component={MyNarrativesItem}
              moreProps={props.moreProps}
            />
            {
              props.moreProps.hasNext ?
                <Button
                  style={{ marginTop: '2rem' }}
                  as={Link}
                  to={`/my-narratives?next=${props.moreProps.next ? props.moreProps.next : ''}`}
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
                  to={`/my-narratives?previous=${props.moreProps.previous ? props.moreProps.previous : ''}`}
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
                  <p> You have not made any Narratives! </p>
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

MyNarrativesWrapper.propTypes = {
  data: PropTypes.object,
  animate: PropTypes.bool,
  moreProps: PropTypes.object,
};

export default MyNarrativesWrapper;
