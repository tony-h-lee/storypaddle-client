/**
 *
 * AuthContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { Switch, withRouter } from 'react-router-dom';

import RouteWrapper from 'components/RouteWrapper';
import FooterComponent from 'components/FooterComponent';
import NavbarContainer from 'containers/NavbarContainer/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable';
import ResetPasswordPage from 'containers/ResetPasswordPage/Loadable';
import NarrativesPage from 'containers/NarrativesPage/Loadable';
import ConfirmModal from 'containers/ConfirmModal/Loadable';

import NarrativeOverviewPage from 'containers/NarrativeOverviewPage/Loadable';
import { PropsRoute, PrivateRoute } from 'containers/CustomRoute';
import { NEW, TRENDING } from 'containers/NarrativesPage/constants';

// Dashboard Pages
import CreateNarrativesPage from 'containers/CreateNarrativesPage/Loadable';
import EditNarrativesPage from 'containers/EditNarrativesPage/Loadable';
import JoinedNarrativesPage from 'containers/JoinedNarrativesPage/Loadable';
import MyNarrativesPage from 'containers/MyNarrativesPage/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAuthContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as authActions from './actions';

export class AuthContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // Initialize retrieving auth token saved in storage and user data
  componentWillMount() {
    const localToken = localStorage.getItem('nl_token');
    if (localToken !== null) {
      this.props.actions.setToken(localToken);
      this.props.actions.getMe(localToken);
    }
  }

  render() {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavbarContainer token={this.props.auth.get('token')} />
        <ConfirmModal />
        <Switch>
          <PropsRoute
            exact
            path="/"
            component={RouteWrapper}
            innerComponent={HomePage}
            token={this.props.auth.get('token')}
          />
          <PropsRoute
            exact
            path="/login"
            component={RouteWrapper}
            innerComponent={LoginPage}
          />
          <PropsRoute
            exact
            path="/signup"
            component={RouteWrapper}
            innerComponent={SignupPage}
          />
          <PropsRoute
            exact
            path="/forgot-password"
            component={RouteWrapper}
            innerComponent={ForgotPasswordPage}
          />
          <PropsRoute
            path="/reset-password/:token"
            component={RouteWrapper}
            innerComponent={ResetPasswordPage}
          />
          <PropsRoute
            exact
            path="/narratives/new"
            component={RouteWrapper}
            innerComponent={NarrativesPage}
            pagination={NEW}
          />
          <PropsRoute
            exact
            path="/narratives/trending"
            component={RouteWrapper}
            innerComponent={NarrativesPage}
            pagination={TRENDING}
          />
          <PropsRoute
            exact
            path="/narrative/:id"
            component={RouteWrapper}
            innerComponent={NarrativeOverviewPage}
            token={this.props.auth.get('token')}
            user={this.props.auth.get('user')}
          />
          <PrivateRoute
            exact
            path="/create-narrative"
            component={RouteWrapper}
            innerComponent={CreateNarrativesPage}
            token={this.props.auth.get('token')}
            user={this.props.auth.get('user')}
            redirectTo={'/'}
          />
          <PrivateRoute
            exact
            path="/edit-narrative/:id"
            component={RouteWrapper}
            innerComponent={EditNarrativesPage}
            token={this.props.auth.get('token')}
            user={this.props.auth.get('user')}
            redirectTo={'/'}
          />
          <PrivateRoute
            exact
            path="/joined-narratives"
            component={RouteWrapper}
            innerComponent={JoinedNarrativesPage}
            token={this.props.auth.get('token')}
            user={this.props.auth.get('user')}
            redirectTo={'/'}
          />
          <PrivateRoute
            exact
            path="/my-narratives"
            component={RouteWrapper}
            innerComponent={MyNarrativesPage}
            token={this.props.auth.get('token')}
            user={this.props.auth.get('user')}
            redirectTo={'/'}
          />
          <PropsRoute
            component={RouteWrapper}
            innerComponent={NotFoundPage}
          />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}

AuthContainer.propTypes = {
  auth: PropTypes.object,
  actions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuthContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
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
