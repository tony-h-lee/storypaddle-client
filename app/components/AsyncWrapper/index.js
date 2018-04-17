/**
*
* AsyncWrapper
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
// import styled from 'styled-components';


function AsyncWrapper(props) {
  const {
    payload,
    animate,
    error,
    loading,
    spinner,
  } = props;

  let content = (<div></div>);

  if (spinner && loading) content = (<Loader active size="large" />);
  else if (error) content = props.errorComponent;
  else {
    content = payload && !loading ? (
      <props.innerComponent
        animate={animate}
        data={payload}
        moreProps={props.moreProps}
      />)
      : (<div></div>);
  }
  return content;
}

AsyncWrapper.propTypes = {
  spinner: PropTypes.bool,
  animate: PropTypes.bool,
  payload: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
  innerComponent: PropTypes.func.isRequired,
  errorComponent: PropTypes.node,
  moreProps: PropTypes.object,
};

export default AsyncWrapper;
