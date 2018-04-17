/**
*
* ErrorWrapper
*
*/

import PropTypes from 'prop-types';
// import styled from 'styled-components';

// Routing to display appropriate error component or successful component
// Define the type of errors expected and appropriate display component
function ErrorWrapper(props) {
  switch (props.error) {
    case 'Failed to fetch':
      return props.failedFetchComponent;
    case 404:
      return props.notFoundComponent;
    default:
      return props.successComponent;
  }
}

ErrorWrapper.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.bool,
  ]),
  notFoundComponent: PropTypes.node.isRequired,
  failedFetchComponent: PropTypes.node.isRequired,
  successComponent: PropTypes.node.isRequired,
};

export default ErrorWrapper;
