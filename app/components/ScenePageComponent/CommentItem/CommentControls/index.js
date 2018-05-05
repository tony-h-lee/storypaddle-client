/**
*
* CommentControls
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Button } from 'semantic-ui-react';
// import styled from 'styled-components';

function CommentControls(props) {
  const confirm = {
    header: 'Delete Post?',
    content: (
      <div className="content"> <p> Are you sure you wish to delete this
        <b>{props.type === 'narration' ? ' narration' : ' dialogue'}</b> post? This action is irreversible. </p>
      </div>
    ),
    confirmButton: (
      <Button negative>
        Delete
      </Button>
    ),
    cancelButton: null,
    size: 'large',
  };
  return (
    <Menu secondary size="mini" style={{ justifyContent: props.type === 'narration' ? null : 'center' }}>
      <Menu.Item
        as="a"
        name="Edit"
      />
      <Menu.Item
        as="a"
        name="Delete"
        onClick={() => props.actions
          .openConfirm(
            confirm.header,
            confirm.content,
            confirm.confirmButton,
            confirm.cancelButton,
            confirm.size,
            () => props.actions.deleteComment(props.token, props.commentId, props.sceneId),
            null
          )
        }
      />
    </Menu>
  );
}

CommentControls.propTypes = {
  actions: PropTypes.object,
  type: PropTypes.string,
  sceneId: PropTypes.string,
};

export default CommentControls;
