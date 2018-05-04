/**
*
* CommentsWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Icon, Loader, Button } from 'semantic-ui-react';
import List from 'components/List';
import CommentItem from 'components/ScenePageComponent/CommentItem';
// import styled from 'styled-components';


function CommentsWrapper(props) {
  const getMoreComments = () => {
    if (props.moreProps.hasNext && props.moreProps.isAuthAndRole) {
      return props.moreProps.actions.getMoreSceneComments(props.moreProps.sceneId, false,
        props.moreProps.next, false);
    } else if (props.moreProps.hasNext && !props.moreProps.isAuthAndRole) {
      return props.moreProps.actions.getMoreSceneComments(props.moreProps.sceneId, true,
        props.moreProps.next, false);
    }
    return false;
  };
  let content = (<div />);

  if (props.data.size > 0) {
    if (props.moreProps.isAuthAndRole) {
      content = (
        <div>
          {
            props.moreProps.hasNext ?
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <Button basic onClick={getMoreComments}>
                  <Icon name="angle double up" />
                  Read More
                </Button>
              </div>
              : null
          }
          <Loader
            size="medium"
            inline="centered"
            active={props.moreProps.moreLoading}
          />
          <List
            items={props.data}
            component={CommentItem}
            moreProps={props.moreProps}
          />
        </div>
      );
    } else {
      content = (
        <div>
          <List
            items={props.data}
            component={CommentItem}
            moreProps={props.moreProps}
          />
          <Loader
            size="medium"
            inline="centered"
            active={props.moreProps.moreLoading}
          />
          {
            props.moreProps.hasNext ?
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <Button basic onClick={getMoreComments}>
                  <Icon name="angle double down" />
                  Read More
                </Button>
              </div>
              : null
          }
        </div>
      );
    }
  } else {
    content = (
      <Grid
        textAlign="center"
      >
        <Grid.Column style={{ maxWidth: 450, margin: '2rem 0 5rem 0' }}>
          <Container textAlign="center">
            <Icon size="huge" name="discussions" style={{ marginBottom: '2rem' }} />
            <p> The Narrative is currently empty. </p>
          </Container>
        </Grid.Column>
      </Grid>
    );
  }
  return (
    <div style={{ margin: '2rem 0', height: '100%', minHeight: '30vh' }}>
      {content}
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
