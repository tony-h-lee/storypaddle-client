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
    <div style={{ textAlign: 'center' }}>
      <p style={{ marginBottom: '0' }}>
        { props.item.character.toUpperCase() }
      </p>
      {
        props.item.adjective ?
          <p style={{ marginBottom: '0rem', fontSize: '0.95rem' }}>
            <i>({ props.item.adjective }) </i>
          </p>
          : null
      }
      <p style={{ textAlign: 'left', maxWidth: 450, display: 'inline-block' }}> { props.item.text } </p>
    </div>
  );
}

DialogueType.propTypes = {
  item: PropTypes.object,
};

export default DialogueType;
