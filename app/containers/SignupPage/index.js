/**
 *
 * SignupPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import SignupPageComponent from 'components/SignupPageComponent';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSignupPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class SignupPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>NobleLoot | Signup</title>
          <meta name="description" content="Sign up for a NobleLoot account!" />
        </Helmet>
        <SignupPageComponent />
      </div>
    );
  }
}

SignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signuppage: makeSelectSignupPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signupPage', reducer });
const withSaga = injectSaga({ key: 'signupPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignupPage);
