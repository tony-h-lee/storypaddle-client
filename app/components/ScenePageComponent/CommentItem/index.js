/**
*
* CommentItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import NarrationType from './NarrationType';
import DialogueType from './DialogueType';
// import styled from 'styled-components';


function CommentItem(props) {
  return (
    <div>
      {
        props.item.type === 'narration' ?
          <NarrationType
            item={props.item}
          /> :
          <DialogueType
            item={props.item}
          />
      }
    </div>
  );
}

CommentItem.propTypes = {
  item: PropTypes.object,
};

export default CommentItem;
