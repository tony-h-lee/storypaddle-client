/**
*
* SuggestionsDropdown
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SuggestionsDropdown(props) {
  const { containerProps, children } = props;
  return (
    <div {...containerProps}>
      {
        <div className="autosuggest__header">
          Results
        </div>
      }
      {children}
    </div>
  );
}

SuggestionsDropdown.propTypes = {
  containerProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
  ]),
};

export default SuggestionsDropdown;
