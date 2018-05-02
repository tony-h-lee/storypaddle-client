/**
*
* CommentItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function CommentItem(props) {
  return (
    <div>
      { props.item.text }
    </div>
  );
}

CommentItem.propTypes = {
  item: PropTypes.object,
};

export default CommentItem;
