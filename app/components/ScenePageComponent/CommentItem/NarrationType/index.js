/**
*
* NarrationType
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function NarrationType(props) {
  return (
    <div style={{ whiteSpace: 'pre-line' }}>
      { props.item.text }
    </div>
  );
}

NarrationType.propTypes = {
  item: PropTypes.object,
};

export default NarrationType;
