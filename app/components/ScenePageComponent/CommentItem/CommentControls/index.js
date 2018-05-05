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
  console.log(props);
  return (
    <Menu secondary size="mini">
      <Menu.Item as="a" name="Edit" />
      <Menu.Item as="a" name="Delete" />
    </Menu>
  );
}

CommentControls.propTypes = {
  item: PropTypes.object,
  moreProps: PropTypes.object,
};

export default CommentControls;
