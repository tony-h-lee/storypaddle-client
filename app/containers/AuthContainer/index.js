/**
 *
 * AuthContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable';
import ResetPasswordPage from 'containers/ResetPasswordPage/Loadable';
import { PropsRoute } from 'containers/CustomRoute';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAuthContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { setToken } from './actions';

export class AuthContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    const localToken = localStorage.getItem('nl_token');
    if (localToken !== null) this.props.setToken(localToken);
  }

  render() {
    return (
      <div>
        <Switch>
          <PropsRoute exact path="/" component={HomePage} token={this.props.auth.get('token')} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/forgot-password" component={ForgotPasswordPage} />
          <Route path="/reset-password/:token" component={ResetPasswordPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

AuthContainer.propTypes = {
  auth: PropTypes.object,
  setToken: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuthContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    setToken: (token) => dispatch(setToken(token)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(AuthContainer);
