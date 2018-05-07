/**
*
* CommentItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import NarrationType from './NarrationType';
import DialogueType from './DialogueType';
import CommentControls from './CommentControls';
// import styled from 'styled-components';


function CommentItem(props) {
  if (props.item.editing) {
    return (<div> editing now </div>);
  }
  return (
    <div style={{ paddingBottom: '24px' }}>
      {
        props.item.type === 'narration' ?
          <NarrationType
            item={props.item}
          /> :
          <DialogueType
            item={props.item}
          />
      }
      {
        props.moreProps.user && props.item.author === props.moreProps.user.get('id') ?
          <CommentControls
            actions={props.moreProps.actions}
            type={props.item.type}
            token={props.moreProps.token}
            commentId={props.item.id}
            sceneId={props.moreProps.sceneId}
          />
          : null
      }
    </div>
  );
}

CommentItem.propTypes = {
  item: PropTypes.object,
  moreProps: PropTypes.object,
};

export default CommentItem;
