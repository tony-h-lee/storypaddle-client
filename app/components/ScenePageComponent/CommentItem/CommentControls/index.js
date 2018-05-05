/**
*
* CommentControls
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
// import styled from 'styled-components';

function CommentControls(props) {
  return (
    <Menu secondary size="mini" style={{ justifyContent: props.type === 'narration' ? null : 'center' }}>
      <Menu.Item as="a" name="Edit" />
      <Menu.Item as="a" name="Delete" />
    </Menu>
  );
}

CommentControls.propTypes = {
  type: PropTypes.string,
};

export default CommentControls;
