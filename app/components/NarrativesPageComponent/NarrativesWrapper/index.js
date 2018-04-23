/**
 *
 * NarrativesWrapper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Transition, Grid, Container, Icon, Button, Loader, Dropdown } from 'semantic-ui-react';
import NarrativeGridList from 'components/NarrativeGridList';
import { Link } from 'react-router-dom';
import NarrativesItem from 'components/NarrativesPageComponent/NarrativesItem';
import Waypoint from 'react-waypoint';
// import styled from 'styled-components';

const options = [
  { key: 'all', text: 'All', value: 'All' },
  { key: 'fantasy', text: 'Fantasy', value: 'Fantasy' },
  { key: 'science fiction', text: 'Science Fiction', value: 'Science Fiction' },
  { key: 'historical fiction', text: 'Historical Fiction', value: 'Historical Fiction' },
];

function NarrativesWrapper(props) {
  const getMoreNarratives = () => {
    if (!(!props.moreProps.hasNext && props.moreProps.hasPrevious)) {
      return actions.getMoreNarratives(props.moreProps.next);
    }
    return false;
  };
  const actions = props.moreProps.actions;
  const content = (
    <div style={{ marginTop: '2rem', height: '100%', minHeight: '100vh' }}>
      {
        props.data.size > 0 ?
          <div>
            <Button.Group basic style={{ marginBottom: '2rem' }}>
              <Button>Trending</Button>
              <Button>New</Button>
              <Dropdown
                button
                placeholder="Filter Genre"
                options={options}
                onChange={(e, { value }) => actions.setGenreFilter(value)}
              />
            </Button.Group>

            <NarrativeGridList
              items={props.data}
              component={NarrativesItem}
              moreProps={props.moreProps}
            />
            <Waypoint
              onEnter={getMoreNarratives}
              topOffset={'80%'}
            />
            <Loader
              size="medium"
              inline="centered"
              active
              style={{ visibility: props.moreProps.moreLoading ? 'visible' : 'hidden' }}
            />
          </div>
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
