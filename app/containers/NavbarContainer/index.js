/**
 *
 * NavbarContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import NavbarComponent from 'components/NavbarComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNavbarContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export class NavbarContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavbarComponent />
    );
  }
}

NavbarContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  navbarcontainer: makeSelectNavbarContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'navbarContainer', reducer });
const withSaga = injectSaga({ key: 'navbarContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NavbarContainer);
