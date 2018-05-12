/**
 *
 * NavbarContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { unsetAuth } from 'containers/AuthContainer/actions';
import NavbarComponent from 'components/NavbarComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import * as navbarActions from './actions';
import makeSelectNavbarContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export class NavbarContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavbarComponent {...this.props} />
    );
  }
}

NavbarContainer.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  navbarContainer: makeSelectNavbarContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(unsetAuth()),
    actions: bindActionCreators(navbarActions, dispatch),
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
