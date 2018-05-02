/**
*
* DialogueType
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function DialogueType(props) {
  return (
    <div>
      { props.item.text }
    </div>
  );
}

DialogueType.propTypes = {
  item: PropTypes.object,
};

export default DialogueType;
