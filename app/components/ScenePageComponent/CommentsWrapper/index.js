/**
*
* CommentsWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Icon, Loader } from 'semantic-ui-react';
import List from 'components/List';
import CommentItem from 'components/ScenePageComponent/CommentItem';
import Waypoint from 'react-waypoint';
// import styled from 'styled-components';


function CommentsWrapper(props) {
  const getMoreComments = () => {
    if (props.moreProps.hasNext) {
      return props.moreProps.actions.getMoreSceneComments(props.moreProps.sceneId,
        props.moreProps.next, props.moreProps.previous);
    }
    return false;
  };
  return (
    <div style={{ marginTop: '2rem', height: '100%', minHeight: '50vh' }}>
      {
        props.data.size > 0 ?
          <div>
            <Waypoint
              onEnter={getMoreComments}
              topOffset={'20%'}
            />
            <Loader
              size="medium"
              inline="centered"
              active
              style={{ visibility: props.moreProps.moreLoading ? 'visible' : 'hidden' }}
            />
            <List
              items={props.data}
              component={CommentItem}
              moreProps={props.moreProps}
            />
          </div>
          :
          (
            <Grid
              textAlign="center"
            >
              <Grid.Column style={{ maxWidth: 450, marginTop: '5rem' }}>
                <Container textAlign="center">
                  <Icon size="huge" name="discussions" style={{ marginBottom: '2rem' }} />
                  <p> The Narrative is currently empty. </p>
                </Container>
              </Grid.Column>
            </Grid>
          )
      }
    </div>
  );
}

CommentsWrapper.propTypes = {
  /*
  token: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  */
  data: PropTypes.object,
  moreProps: PropTypes.object,
};

export default CommentsWrapper;
